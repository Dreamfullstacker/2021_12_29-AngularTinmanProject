import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ThinqService } from '../thinq/thinq.service';

@Injectable({
  providedIn: 'root'
})
export class RelateThinqService {

  private _apiUrl: string = environment.apiEndPoint;
  private _appDataId: number;
  private _cabinet: string;
  private _existingRelations: BehaviorSubject<any> = new BehaviorSubject(null);
  private _relationsFirstLevel: BehaviorSubject<any> = new BehaviorSubject(null);
  private _enabledClassesString: BehaviorSubject<string[]> = new BehaviorSubject(null);
  private _enabledClassesId: BehaviorSubject<string[]> = new BehaviorSubject(null);
  private _classFields: BehaviorSubject<any> = new BehaviorSubject(null);
  private _relationshipOptions: BehaviorSubject<any> = new BehaviorSubject(null);
  private _relatedSearchResult: BehaviorSubject<any> = new BehaviorSubject(null);
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private _httpClient: HttpClient,
    private _authService: AuthService,
    private _thinqService: ThinqService,
    private _router: Router
  ) { }

  /**
   * Getter for isLoading
   */
  get isLoading$(): Observable<boolean>
  {
    return this._isLoading.asObservable();
  }

  /**
   * Getter for existingRelations
   */
  get existingRelations$(): Observable<any>
  {
    return this._existingRelations.asObservable();
  }

  /**
   * Getter for relationsFirstLevel
   */
  get relationsFirstLevel$(): Observable<any>
  {
    return this._relationsFirstLevel.asObservable();
  }

  /**
   * Getter for enabledClasses
   */
  get enabledClassesString$(): Observable<any>
  {
    return this._enabledClassesString.asObservable();
  }

  /**
   * Getter for enabledClasses
   */
  get enabledClassesId$(): Observable<any>
  {
    return this._enabledClassesId.asObservable();
  }

  /**
   * Getter for classFields
   */
  get classFields$(): Observable<any>
  {
    return this._classFields.asObservable();
  }

  /**
   * Getter for relationshipsOptions
   */
  get relationshipOptions$(): Observable<any>
  {
    return this._relationshipOptions.asObservable();
  }

  /**
   * Getter for relatedSearchResult
   */
  get relatedSearchResult$(): Observable<any>
  {
    return this._relatedSearchResult.asObservable();
  }

  /**
   * Get Related First Level
   */
  getExistingRelations(appDataId: number): Observable<any>
  {
    const formData: FormData = this._authService.getAuthenticationData();
    this._appDataId = appDataId;
    formData.append('function', 'GetRelationshipsThinq');
    formData.append('i', appDataId.toString());
    this._isLoading.next(true);
    return this._httpClient.post<any>(this._apiUrl + '/api/coreapi/getApiV1Relate.php',
      formData
    ).pipe(
      tap((response: any) => {
        this._isLoading.next(false);
        let relations = response;
        relations = relations.filter(relation =>
          relation.RelationshipName !== 'Creator of' &&
          relation.RelationshipName !== 'Created by');
        this._existingRelations.next(relations);
      })
    );
  }

  /**
   * Get Related First Level
   */
  getRelatedFirstLevel(appDataId: number): Observable<any>
  {
    const formData: FormData = this._authService.getAuthenticationData();
    this._appDataId = appDataId;
    formData.append('function', 'GetRelatedFirstLevel');
    formData.append('i', appDataId.toString());
    this._isLoading.next(true);
    return this._httpClient.post<any>(this._apiUrl + '/api/coreapi/getApiV1Relate.php',
      formData
    ).pipe(
      tap((response: any) => {
        this._isLoading.next(false);
        this._relationsFirstLevel.next(response);
      })
    );
  }

  /**
   * Get Enabled Classes
   */
  getEnabledClassesString(): Observable<string>
  {
    const formData: FormData = this._authService.getAuthenticationData();
    formData.append('function', 'GetEnabledClasses');
    this._isLoading.next(true);
    return this._httpClient.post(this._apiUrl + '/api/coreapi/getApiV1Relate.php',
      formData,
      {
        responseType: 'text'
      }
    ).pipe(
      tap((response: string) => {
        this._isLoading.next(false);
        const classes = response.split(',');
        this._enabledClassesString.next(classes);
      })
    );
  }

  /**
   * Get Enabled Classes String array
   */
  getEnabledClassesId(): Observable<any[]>
  {
    const formData: FormData = this._authService.getAuthenticationData();
    formData.append('function', 'GetEnabledClassesWithIds');
    this._isLoading.next(true);
    return this._httpClient.post<any[]>(this._apiUrl + '/api/coreapi/getApiV1Relate.php',
      formData,
    ).pipe(
      tap((response: any[]) => {
        this._isLoading.next(false);
        this._enabledClassesId.next(response);
      })
    );
  }

  /**
   * Get Class Fields
   */
  getClassFields(cabinet: string): Observable<any>
  {
    const formData: FormData = this._authService.getAuthenticationData();
    formData.append('function', 'GetClassFields');
    this._cabinet = cabinet;
    formData.append('c', cabinet);
    this._isLoading.next(true);
    return this._httpClient.post<any[]>(this._apiUrl + '/api/coreapi/getApiV1Relate.php',
      formData
    ).pipe(
      tap((response: any[]) => {
        this._isLoading.next(false);
        this._classFields.next(response);
      })
    );
  }

  /**
   * Get Relationship Options
   */
  getRelationshipOptions(appDataId: number): Observable<any>
  {
    const formData: FormData = this._authService.getAuthenticationData();
    formData.append('function', 'GetRelationshipOptions');
    formData.append('i', appDataId.toString());
    this._isLoading.next(true);
    return this._httpClient.post<any>(this._apiUrl + '/api/coreapi/getApiV1Relate.php',
      formData
    ).pipe(
      tap((response: any) => {
        this._isLoading.next(false);
        this._relationshipOptions.next(response);
      })
    );
  }

  /**
   * Get Related Search
   */
  getRelateSearch(
    cabinet: string = '',
    searchField: string = '',
    searchQuery: string = ''
  ): Observable<any> {
    const formData: FormData = this._authService.getAuthenticationData();
    formData.append('function', 'GetRelateSearch');
    formData.append('c', cabinet);
    formData.append('f', searchField);
    formData.append('s', searchQuery);
    this._isLoading.next(true);
    return this._httpClient.post<any>(this._apiUrl + '/api/coreapi/getApiV1Relate.php',
      formData
    ).pipe(
      tap((response: any) => {
        this._isLoading.next(false);
        this._relatedSearchResult.next(response);
      })
    );
  }

  /**
   * Create/Update Relationship
   */
  updateRelationship(params: any): Observable<any> {
    const functionData = params;
    functionData.SourceId = this._appDataId;
    return this._thinqService.runThinqFunction('CreateRelationship', params);
  }

  /**
   * Delete Relationship
   */
  deleteRelationship(params: any): Observable<any> {
    const functionData = params;
    functionData.SourceId = this._appDataId;
    return this._thinqService.runThinqFunction('DeleteRelationship', params);
  }
}
