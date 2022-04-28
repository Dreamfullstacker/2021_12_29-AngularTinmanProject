/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiV1GetDataResponse } from 'app/core/admin-view/admin-view.type';
import { AuthService } from 'app/core/auth/auth.service';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PMCountTaskInfo, PMProject } from './pm-dashboard.type';

@Injectable({
  providedIn: 'root'
})
export class PMDashboardService {

  groupBy: string;
  private _projects: BehaviorSubject<PMProject[]> = new BehaviorSubject(null);
  private _teamPlayers: BehaviorSubject<any[]> = new BehaviorSubject(null);
  private _countTaskInfo: BehaviorSubject<PMCountTaskInfo> = new BehaviorSubject(null);
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(null);
  private _apiUrl: string = environment.apiEndPoint;

  constructor(
    private _httpClient: HttpClient,
    private _authService: AuthService,
    private _router: Router
  ) { }

  /**
   * Getter for projects
   */
  get projects$(): Observable<PMProject[]>
  {
    return this._projects.asObservable();
  }

  /**
   * Getter for teamPlayers
   */
  get teamPlayers$(): Observable<PMProject[]>
  {
    return this._teamPlayers.asObservable();
  }

  /**
   * Getter for quantity info of tasks
   */
  get countTaskInfo$(): Observable<PMCountTaskInfo>
  {
    return this._countTaskInfo.asObservable();
  }

  /**
   * Getter for isLoading
   */
  get isLoading$(): Observable<boolean>
  {
    return this._isLoading.asObservable();
  }

  /**
   * Get data
   */
  getPMData(
    dateFrom: string = '',
    dateTo: string = '',
    queryFunction: string = '',
    groupBy: string = 'Status',
    userId: string = 'All',
    ownerId: string = 'All',
    blnIgnoreClosed: 1 | 0 = 1,
    blnIgnoreDate: 1 | 0 = 1,
    status: string = '',
    type: string = '',
    nature: string = '',
    projectId: string = '',
    statusButtons: string = ''
  ): Observable<PMProject[] | PMCountTaskInfo>
  {
    const formData: FormData = this._authService.getAuthenticationData();
    this.groupBy = groupBy;
    const objFilters = {
      dteFrom:            { Type: 'dte', Field: '', Value: dateFrom, Values: [], Operator: 'EQUALS' },
      dteTo:              { Type: 'dte', Field: '', Value: dateTo, Values: [], Operator: 'EQUALS' },
      ProjectId:          { Type: 'int', Field: '', Value: projectId, Values: [], Operator: 'EQUALS' },
      GroupBy:            { Type: 'str', Field: '', Value: groupBy, Values: [], Operator: 'EQUALS' },
      UserId:             { Type: 'int', Field: '', Value: userId || 'All', Values: [], Operator: 'EQUALS' },
      OwnerId:            { Type: 'int', Field: '', Value: ownerId || 'All', Values: [], Operator: 'EQUALS' },
      blnIgnoreClosed:    { Type: 'bln', Field: '', Value: blnIgnoreClosed, Values: [], Operator: 'LOGIC' },
      blnIgnoreDate:      { Type: 'bln', Field: '', Value: blnIgnoreDate, Values: [], Operator: 'LOGIC' },
      Function:           { Type: 'str', Field: '', Value: queryFunction, Values: [], Operator: 'EQUALS' },
      // Status loaded on Top row - new feature
      Status:             { Type: 'str', Field: '', Value: status, Values: [], Operator: 'EQUALS' },
      // Status Nature buttons activated to load relevant tasks
      Type:               { Type: 'str', Field: '', Value: type, Values: [], Operator: 'EQUALS' },
      Nature:             { Type: 'str', Field: '', Value: nature, Values: [], Operator: 'EQUALS' },
      // Combination Status buttons created from Load
      StatusButtons:      { Type: 'str', Field: '', Value: statusButtons, Values: [], Operator: 'EQUALS' },
    };
    formData.append('arrFilter', JSON.stringify(objFilters));
    this._isLoading.next(true);
    return this._httpClient.post<PMProject[] | PMCountTaskInfo>(this._apiUrl + '/api/coreapi/getApiV1PMDashboard.php',
      formData
    ).pipe(
      tap((response: PMProject[] | PMCountTaskInfo) => {
        console.log(response);
        this._isLoading.next(false);
        this.setPMData(response, queryFunction);
      })
    );
  }

  /**
   * Get Team players
   */
  getTeamPlayers(): Observable<ApiV1GetDataResponse> {
    const formData: FormData = this._authService.getAuthenticationData();
    const params: HttpParams = new HttpParams()
      .set('c', 'User')
      .set('f', 'FirstName')
      .set('o', 'FirstName,LastName')
      .set('Role', '!api')
      .set('LoginStatus', 'active');
    return this._httpClient.post<ApiV1GetDataResponse>(this._apiUrl + '/api/coreapi/getApiV1GetData.php',
      formData,
      {
        params: params
      }
    ).pipe(
      tap((response: ApiV1GetDataResponse) => {
        console.log(response);
        // Update the data
        const userArray = response.Data.map(user => ({
          label: user.Abstract,
          value: user.AppDataId
        }));
        userArray.push({
          label: 'All',
          value: '',
        });
        this._teamPlayers.next(userArray);
      })
    );
  }

  setPMData(data: any, queryFunction: string): void {
    switch(queryFunction) {
      case 'Summary':
      case 'Sort':
      case 'Overdue':
      case 'NoDueDate':
      case 'Orphan':
        this._projects.next(data);
        break;
      case 'doCountTasks':
      case 'OverDueCount':
        this._countTaskInfo.next(data);
        break;
    }
  }
}
