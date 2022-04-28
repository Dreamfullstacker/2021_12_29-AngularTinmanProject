import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateThinqService {

  private _apiUrl: string = environment.apiEndPoint;
  private _appDataId: number;
  private _cabinets: BehaviorSubject<any> = new BehaviorSubject(null);
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private _httpClient: HttpClient,
    private _authService: AuthService,
  ) { }

  /**
   * Getter for cabinetList
   */
  get cabinets$(): Observable<any>
  {
    return this._cabinets.asObservable();
  }

  /**
   * Getter for isLoading
   */
  get isLoading$(): Observable<any>
  {
    return this._isLoading.asObservable();
  }

  getCabinets(appId: number = 0): Observable<any>
  {
    const formData: FormData = this._authService.getAuthenticationData();
    this._appDataId = appId;
    this._isLoading.next(true);
    return this._httpClient.post<any>(this._apiUrl + '/api/coreapi/getApiV1CreateList.php',
      formData
    ).pipe(
      tap((response: any) => {
        console.log(response);
        this._cabinets.next(response);
        this._isLoading.next(false);
      })
    );
  }

  createThinq(classId: number): Observable<any>
  {
    const formData: FormData = this._authService.getAuthenticationData();
    const t = this._authService.kq_ClientKey;
    let params: HttpParams = new HttpParams();
    params = params.set('t', t);
    params = params.set('c', classId);
    params = params.set('r', this._appDataId);
    this._isLoading.next(true);
    return this._httpClient.post(this._apiUrl + '/api/coreapi/createApiV1Thinq.php',
        formData,
        {
          params: params
        }
    ).pipe(
      tap((response: string) => {
        this._isLoading.next(false);
        console.log(response);
      })
    );
  }
}
