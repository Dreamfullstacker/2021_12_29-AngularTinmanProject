import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiV1GetDataResponse } from 'app/core/admin-view/admin-view.type';
import { AuthService } from 'app/core/auth/auth.service';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpportunityDashboardService {

  private _apiUrl: string = environment.apiEndPoint;
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(null);
  private _opportunity: BehaviorSubject<ApiV1GetDataResponse> = new BehaviorSubject(null);

  constructor(
    private _httpClient: HttpClient,
    private _authService: AuthService,
    private _router: Router
  ) { }

  /**
   * Getter for opportunity
   */
  get opportunity$(): Observable<ApiV1GetDataResponse>
  {
    return this._opportunity.asObservable();
  }

  /**
   * Getter for loading
   */
  get isLoading$(): Observable<boolean>
  {
    return this._isLoading.asObservable();
  }

  /**
   * Get Opportunity for this year
   */
  getData(
    party: string,
    dateFrom: string,
    dateTo: string,
  ): Observable<ApiV1GetDataResponse>
  {
    const formData: FormData = this._authService.getAuthenticationData();
    const params: HttpParams = new HttpParams()
      .set('c', 'Opportunity')
      .set('PartyId', party)
      .set('fd', 'EstimateSaleDate')
      .set('df', dateFrom)
      .set('dt', dateTo);
    this._isLoading.next(true);
    return this._httpClient.post<ApiV1GetDataResponse>(this._apiUrl + '/api/coreapi/getApiV1GetData.php',
      formData,
      {
        params: params
      }
    ).pipe(
      tap((response: ApiV1GetDataResponse) => {
        this._isLoading.next(false);
        this._opportunity.next(response);
      })
    );
  }
}
