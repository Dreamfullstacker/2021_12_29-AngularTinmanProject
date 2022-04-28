import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { AuthService } from 'app/core/auth/auth.service';
import { Sort } from '@angular/material/sort';
import { AdminViewPagination } from 'app/core/thinq/thinq.type';
import { Router } from '@angular/router';
import { ApiV1GetThinqListResponse } from 'app/core/admin-view/admin-view.type';

@Injectable({
    providedIn: 'root'
})
export class AdminViewService {

  private _cabinet: BehaviorSubject<string> = new BehaviorSubject(null);
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(null);
  private _columns:  BehaviorSubject<any[]> = new BehaviorSubject(null);
  private _headerClass:  BehaviorSubject<any> = new BehaviorSubject(null);
  private _apiUrl: string = environment.apiEndPoint;
  private _data: BehaviorSubject<ApiV1GetThinqListResponse> = new BehaviorSubject(null);
  private _pagination: BehaviorSubject<AdminViewPagination | null> = new BehaviorSubject(null);

  constructor(
    private _httpClient: HttpClient,
    private _authService: AuthService,
    private _router: Router
  ) { }

  /**
   * Getter for cabinet
   */
  get cabinet$(): Observable<string>
  {
    return this._cabinet.asObservable();
  }

  /**
   * Getter for isLoading
   */
  get isLoading$(): Observable<boolean>
  {
    return this._isLoading.asObservable();
  }

  /**
   * Getter for columns
   */
  get columns$(): Observable<any[]>
  {
    return this._columns.asObservable();
  }

  /**
   * Getter for headerClass
   */
  get headerClass$(): Observable<any>
  {
    return this._headerClass.asObservable();
  }

  /**
   * Getter for data
   */
  get data$(): Observable<ApiV1GetThinqListResponse>
  {
    return this._data.asObservable();
  }

  /**
   * Getter for pagination
   */
  get pagination$(): Observable<AdminViewPagination>
  {
    return this._pagination.asObservable();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get data
   */
  getData(
    cabinet: string,
    page: number = 1,
    size: number = 25,
    sortQuery: Sort[] = [],
    searchQuery: any = null): Observable<any>
  {
    const formData: FormData = this._authService.getAuthenticationData();
    let params: HttpParams = new HttpParams()
      .set('c', cabinet)
      .set('p', page)
      .set('ps', size)
      .set('pc', true);
    if(sortQuery.length > 0) {
      let order = '';
      for (let i = 0; i < sortQuery.length; i ++) {
        order += (sortQuery[i].direction === 'asc' ? '' : '!') + sortQuery[i].active;
        if(i !== sortQuery.length - 1) {
          order += ',';
        }
      }
      params = params.set('o', order);
    }
    if (searchQuery) {
      for (const iterator of searchQuery) {
        params = params.set(iterator.field, iterator.value);
      }
    }
    this._isLoading.next(true);
    return this._httpClient.post<ApiV1GetThinqListResponse>(this._apiUrl + '/api/coreapi/getApiV1ThinqList.php',
      formData,
      {
        params: params
      }
    ).pipe(
      tap((response: ApiV1GetThinqListResponse | string) => {
        if(typeof response === 'string') {
          this._router.navigate(['/']);
        } else {
          this._data.next(response);
          console.log(response);
          this._isLoading.next(false);
          if( !this._cabinet.value || this._cabinet.value !== cabinet) {
            this._columns.next(response.Fields);
            this._cabinet.next(cabinet);
          }
          this._headerClass.next(response.Class);
          this._pagination.next({
            size: Number(response.PageSize),
            page: Number(response.PageNumber),
            length: Number(response.RowCount)
          });
        }
      })
    );
  }

  updateField(
    cabinet: string,
    appDataId: number,
    fieldName: string,
    value: string
  ): Observable<any>
  {
    const formData: FormData = this._authService.getAuthenticationData();
    formData.append('c', cabinet);
    formData.append('i', appDataId.toString());
    formData.append('f', fieldName);
    formData.append('v', value);
    this._isLoading.next(true);
    return this._httpClient.post<any>(this._apiUrl + '/api/coreapi/doApiV1SaveField.php',
      formData,
    ).pipe(
      tap((response: any) => {
        this._isLoading.next(false);
      })
    );
  }
}
