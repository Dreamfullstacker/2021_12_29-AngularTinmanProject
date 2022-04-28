/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiV1GetDataResponse } from 'app/core/admin-view/admin-view.type';
import { CandidateJobs } from 'app/core/assessment/assessment.type';
import { AuthService } from 'app/core/auth/auth.service';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    answerId: number;
    private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(null);
    private _apiUrl: string = environment.apiEndPoint;
    private _candidateJobs: BehaviorSubject<CandidateJobs> = new BehaviorSubject(null);

    constructor(
        private _httpClient: HttpClient,
        private _authService: AuthService,
    ) { }

    /**
     * Getter for Interesting jobs
     */
    get candidateJobs$(): Observable<CandidateJobs> {
        return this._candidateJobs.asObservable();
    }

    /**
     * Getter for questions
     */
    get isLoading$(): Observable<boolean> {
        return this._isLoading.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get question AppDataId list
     */
    getCandiateJobs(): Observable<CandidateJobs> {
        const formData: FormData = this._authService.getAuthenticationData();
        // formData.append('UserId', this._authService.kq_UserId.toString());
        this._isLoading.next(true);
        return this._httpClient.post<any>(this._apiUrl + '/api/portal/tinman/portal_DoRenderCanidateJobs.php',
            formData
        ).pipe(
            tap((response: any) => {
                console.log(response);
                this._isLoading.next(false);
                if(response?.Status === 'Error') {
                    this._candidateJobs.next(null);
                } else {
                    this._candidateJobs.next(response);
                }
            })
        );
    }
}
