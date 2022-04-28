import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KanbanBoardService {

  cabinet: string = '';
  groupBy: string = '';
  private _apiUrl: string = environment.apiEndPoint;
  private _data: BehaviorSubject<any[]> = new BehaviorSubject(null);
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private _httpClient: HttpClient,
    private _authService: AuthService,
    private _router: Router
  ) { }

  /**
   * Getter for data
   */
  get data$(): Observable<any>
  {
      return this._data.asObservable();
  }
  /**
   * Getter for isLoading
   */
  get isLoading$(): Observable<any>
  {
    return this._isLoading.asObservable();
  }

  getData(
    cabinet: string,
    field: string,
    searchForm: FormGroup = null
  ): Observable<any> {
    const formData: FormData = this._authService.getAuthenticationData();
    const searchQuery = searchForm?.value;
    this.cabinet = cabinet;
    this.groupBy = field;
    const params: HttpParams = new HttpParams()
      .set('c', cabinet)
      .set('AssignedTo', this._authService.kq_UserId);
    for (const key in searchQuery) {
      if (Object.prototype.hasOwnProperty.call(searchQuery, key)) {
        const query = searchQuery[key];
        formData.append(key, query);
      }
    }
    this._isLoading.next(true);
    return this._httpClient.post<any>(this._apiUrl + '/api/coreapi/getApiV1ThinqList.php',
      formData,
      {
        params: params
      }
    ).pipe(
      tap((response: any) => {
        console.log(response);
        this._data.next(response.Data);
        this._isLoading.next(false);
      })
    );
  }
}
