/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiGetDataResponse, ApiV1GetDataResponse, GetDataResponse } from 'app/core/admin-view/admin-view.type';
import { AuthService } from 'app/core/auth/auth.service';
import { appClasses, appPartyRoleArray } from 'app/core/config/app.config';
import { ProfilePoint } from 'app/core/config/assessment.config';
import { ThinqResponse } from 'app/core/thinq/thinq.type';
import { UserService } from 'app/core/user/user.service';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { mergeMap, switchMap, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AssessmentService {

    answerId: number;
    private _isInitialAnswer: boolean = false;
    private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(null);
    private _apiUrl: string = environment.apiEndPoint;
    private _assessments: BehaviorSubject<ApiV1GetDataResponse> = new BehaviorSubject(null);
    private _answer: BehaviorSubject<ApiV1GetDataResponse> = new BehaviorSubject(null);

    constructor(
        private _httpClient: HttpClient,
        private _authService: AuthService,
        private _userService: UserService,
        private _router: Router
    ) { }

    /**
     * Getter for questions
     */
    get assessments$(): Observable<ApiV1GetDataResponse> {
        return this._assessments.asObservable();
    }

    /**
     * Getter for questions
     */
    get answer$(): Observable<any> {
        return this._answer.asObservable();
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
    getQuestions(): Observable<GetDataResponse> {
        const formData: FormData = this._authService.getAuthenticationData();
        const params: HttpParams = new HttpParams()
            .set('c', 'Tinman_Question')
            .set('Language', this._authService.kq_Language);
        this._isLoading.next(true);
        return this._httpClient.post<GetDataResponse>(this._apiUrl + '/api/getData.php',
            formData,
            {
                params: params
            }
        ).pipe(
            tap((response: GetDataResponse) => {
                console.log(response);
                this._isLoading.next(false);
                this._assessments.next(response.Data);
            })
        );
    }

    /**
     * Get question AppDataId list
     */
    getAnswer(party: number): Observable<any> {
        const formData: FormData = this._authService.getAuthenticationData();
        const params: HttpParams = new HttpParams()
            .set('c', 'Tinman_Answer')
            .set('PartyId', party);
        this._isLoading.next(true);
        return this._httpClient.post<any>(this._apiUrl + '/api/getData.php',
            formData,
            {
                params: params
            }
        ).pipe(
            switchMap((response: GetDataResponse) => {
                this._isLoading.next(false);
                this._answer.next(response.Data);
                if (response.Data.RowCount) {
                    this.answerId = response.Data.Data[0].AppDataId;
                    return of(response.Data.Data[0]);
                }
                return of([]);
            })
        );
    }

    createAnswer(firstAnswer: any): Observable<any> {
        const formData: FormData = this._authService.getAuthenticationData();
        formData.append('ClassName', 'Tinman_Answer');
        formData.append('UserId', this._authService.kq_UserId.toString());
        this._isLoading.next(true);
        return this._httpClient.post(this._apiUrl + '/api/createThinq.php',
            formData
        ).pipe(
            mergeMap((response: string) => {
                this.answerId = Number(response);
                this._isInitialAnswer = true;
                return this.saveAnswer(firstAnswer);
            })
        );
    }

    saveAnswer(answer: any): Observable<string> {
        const formData: FormData = this._authService.getAuthenticationData();
        if (this._isInitialAnswer) {
            const partyRole = appPartyRoleArray.find(pr => pr.PartyRoleDefinition === 'Candidate');
            answer = {
                ...answer,
                'PartyRoleId': partyRole.PartyRoleLinkId.toString(),
                'PartyName': partyRole.PartyName
            };
            this._isInitialAnswer = false;
        }
        formData.append('ClassName', 'Tinman_Answer');
        formData.append('AppDataId', this.answerId.toString());
        formData.append('Fields', JSON.stringify(answer));
        this._isLoading.next(true);
        return this._httpClient.post(this._apiUrl + '/api/portal/tinman/portal_saveThinq.php',
            formData,
            {
                responseType: 'text'
            }
        ).pipe(
            tap((res: string) => {
                this._isLoading.next(false);
            })
        );
    }

    saveTopProfiles(answerId: number, topProfiles: ProfilePoint[]): Observable<any> {
        const formData: FormData = this._authService.getAuthenticationData();
        let data: any = { 'Status': 'Completed' };
        for (let i = 0; i < topProfiles.length; i++) {
            const profile = topProfiles[i];
            data = {
                ...data,
                [`ONETPlaceQty${i + 1}`]: profile.point,
                [`ONETResultTxt${i + 1}`]: profile.label,
            };
        }
        const partyRole = appPartyRoleArray.find(pr => pr.PartyRoleDefinition === 'Candidate');
        data = {
            ...data,
            'PartyRoleId': partyRole.PartyRoleLinkId.toString(),
            'PartyName': partyRole.PartyName
        };
        this._isInitialAnswer = false;
        formData.append('ClassName', 'Tinman_Answer');
        formData.append('AppDataId', answerId.toString());
        formData.append('Fields', JSON.stringify(data));
        this._isLoading.next(true);
        return this._httpClient.post<any>(this._apiUrl + '/api/portal/tinman/portal_saveThinq.php',
            formData
        ).pipe(
            tap((res: any) => {
                this._isLoading.next(false);
            })
        );
    }
}
