/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { appClasses, appRelationship } from 'app/core/config/app.config';
import { UserService } from 'app/core/user/user.service';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, mergeMap, switchMap, takeUntil, tap } from 'rxjs/operators';
import { AdminViewService } from '../admin-view/admin-view.service';
import { RelateThinqService } from '../relate-thinq/relate-thinq.service';
import { ThinqService } from '../thinq/thinq.service';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  relationshipOptions: any[];
  enabledClasses: any[];
  _trackingTime: BehaviorSubject<any> = new BehaviorSubject(null);
  _trackingTask: BehaviorSubject<any> = new BehaviorSubject(null);
  private _apiUrl: string = environment.apiEndPoint;
  private _tasks: BehaviorSubject<any> = new BehaviorSubject(null);
  private _timesheets: BehaviorSubject<any> = new BehaviorSubject(null);
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private _httpClient: HttpClient,
    private _adminviewService: AdminViewService,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.getOpenTasks().subscribe();
  }

  /**
   * Getter for tasks
   */
  get tasks$(): Observable<any>
  {
    return this._tasks.asObservable();
  }

  /**
   * Getter for trackingTimer
   */
  get trackingTime$(): Observable<any>
  {
    return this._trackingTime.asObservable();
  }

  /**
   * Getter for trackingTask
   */
  get trackingTask$(): Observable<any>
  {
    return this._trackingTask.asObservable();
  }

  /**
   * Getter for timesheet
   */
  get timesheets$(): Observable<any>
  {
    return this._timesheets.asObservable();
  }

  /**
   * Getter for isLoading
   */
  get isLoading$(): Observable<any>
  {
    return this._isLoading.asObservable();
  }

  /**
   * Get My Open Tasks
   */

  getOpenTasks(): Observable<any>
  {
    const formData: FormData = this._authService.getAuthenticationData();
    formData.append('assignedto', this._authService.kq_UserId.toString());
    formData.append('owner', this._authService.kq_UserId.toString());
    this._isLoading.next(true);
    return this._httpClient.post<any>(this._apiUrl + '/api/coreapi/getApiV1PMData.php',
      formData,
    ).pipe(
      tap((response: any) => {
        this._isLoading.next(false);
        this._tasks.next(response);
      })
    );
  }

  getTimesheetsbyDate(startDate: string, endDate: string): Observable<any>
  {
    const formData: FormData = this._authService.getAuthenticationData();
    const params: HttpParams = new HttpParams()
      .set('i', this._authService.kq_UserId)
      .set('df', startDate)
      .set('dt', endDate)
      .set('f', 'Summary');
    this._isLoading.next(true);
    return this._httpClient.post<any>(this._apiUrl + '/api/coreapi/getApiV1PMTime.php',
      formData,
      {
        params: params
      }
    ).pipe(
      tap((response: any) => {
        this._isLoading.next(false);
        this._timesheets.next(response);
      })
    );
  }

  saveTimesheet(taskId: number, trackedTime: number, activity: string, description: string): Observable<any>
  {
    const formData: FormData = this._authService.getAuthenticationData();
    let params: HttpParams = new HttpParams();
    const timesheetCabinet = appClasses.find(cab => cab.ClassName === 'Timesheet');
    const parentofRelation = appRelationship.find(rel => rel.RelationshipName === 'Parent of');
    params = params.set('c', timesheetCabinet.ClassId);
    params = params.set('r', taskId);
    params = params.set('rti', parentofRelation.RelationshipId);
    this._isLoading.next(true);
    return this._httpClient.post(this._apiUrl + '/api/coreapi/createApiV1Thinq.php',
      formData,
      {
        params: params,
        observe: 'body' as const,
        responseType: 'text' as const
      }
    ).pipe(
      mergeMap((response: string) => {
        const timesheetId = Number(response);
        const trackedHoursmin = Math.floor(trackedTime / 60);
        const trackedMinutes = Math.floor(trackedTime % 60);
        const data = {
          'AppDataId': timesheetId,
          'Activity': activity,
          'DurationTimeHours': trackedHoursmin,
          'DurationTime': trackedMinutes,
          'Description': description,
        };
        formData.append('Data', JSON.stringify(data));
        return this._httpClient.post<any>(this._apiUrl + '/api/coreapi/doApiV1SaveThinq.php',
          formData
        ).pipe(
          switchMap(() => {
            this._isLoading.next(false);
            return of(timesheetId);
          })
        );
      })
    );
  }

  updateTimesheet(timesheetId: number, time: number): Observable<any>
  {
    const formData: FormData = this._authService.getAuthenticationData();
    const trackedHoursmin = Math.floor(time / 60);
    const trackedMinutes = Math.floor(time % 60);
    const data = {
      'AppDataId': timesheetId,
      'DurationTimeHours': trackedHoursmin,
      'DurationTime': trackedMinutes
    };
    formData.append('Data', JSON.stringify(data));
    return this._httpClient.post<any>(this._apiUrl + '/api/coreapi/doApiV1SaveThinq.php',
      formData
    ).pipe(
      map((res) => {
        if(res.Data === 'OK') {
          return time;
        }
        return 0;
      })
    );
  }
}
