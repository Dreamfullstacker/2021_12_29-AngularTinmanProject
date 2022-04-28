import { HttpClient } from '@angular/common/http';
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
export class PMKanbanBoardService {

  private _apiUrl: string = environment.apiEndPoint;
  private _tasks: BehaviorSubject<any[]> = new BehaviorSubject(null);
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private _httpClient: HttpClient,
    private _authService: AuthService,
    private _router: Router
  ) { }

  /**
   * Getter for data
   */
  get tasks$(): Observable<any>
  {
      return this._tasks.asObservable();
  }
  /**
   * Getter for isLoading
   */
  get isLoading$(): Observable<any>
  {
    return this._isLoading.asObservable();
  }

  getTasks(
    searchForm: FormGroup = null
  ): Observable<any> {
    const formData: FormData = this._authService.getAuthenticationData();
    const searchQuery = searchForm?.value;
    formData.append('project', searchQuery?.project ?? '');
    formData.append('nature', searchQuery?.nature ?? '');
    formData.append('subproject', searchQuery?.subproject ?? '');
    formData.append('type', searchQuery?.type ?? '');
    formData.append('epic', searchQuery?.epic ?? '');
    formData.append('assignedto', searchQuery?.assignedto ?? '');
    formData.append('owner', searchQuery?.owner ?? '');
    formData.append('datefrom', searchQuery?.datefrom ?? '');
    formData.append('dateto', searchQuery?.dateto ?? '');
    formData.append('search', searchQuery?.search ?? '');
    this._isLoading.next(true);
    return this._httpClient.post<any>(this._apiUrl + '/api/coreapi/getApiV1PMData.php',
      formData
    ).pipe(
      tap((response: any) => {
        console.log(response);
        this._tasks.next(response);
        this._isLoading.next(false);
      })
    );
  }
}
