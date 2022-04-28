/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { AuthService } from 'app/core/auth/auth.service';
import { ThinqResponse } from 'app/core/thinq/thinq.type';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ThinqService {

    private _apiUrl: string = environment.apiEndPoint;
    private appDataId: number;
    private _data: BehaviorSubject<any> = new BehaviorSubject(null);
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get data
     */
    getData(appId: number): Observable<ThinqResponse>
    {
        const formData: FormData = this._authService.getAuthenticationData();
        formData.append('i', appId.toString());
        this.appDataId = appId;
        this._isLoading.next(true);
        return this._httpClient.post<ThinqResponse>(this._apiUrl + '/api/coreapi/getApiV1ThinqData.php',
            formData
        ).pipe(
            tap((response: ThinqResponse) => {
                if(response.Status === 'Error') {
                    // TODO it can redirect error page
                    this._router.navigate(['/']);
                }
                this._data.next(response);
                this._isLoading.next(false);
            })
        );
    }

    saveForm(formGroupValue: any): Observable<any>
    {
        const formData: FormData = this._authService.getAuthenticationData();
        const data = {
            'AppDataId': this.appDataId, ...formGroupValue
        };
        formData.append('Data', JSON.stringify(data));
        this._isLoading.next(true);
        return this._httpClient.post<any>(this._apiUrl + '/api/coreapi/doApiV1SaveThinq.php',
            formData
        ).pipe(
            tap((res: any) => {
                this._isLoading.next(false);
            })
        );
    }

    createThinq(data: any): Observable<string>
    {
        const formData: FormData = this._authService.getAuthenticationData();
        const t = this._authService.kq_ClientKey;
        let params: HttpParams = new HttpParams();
        params = params.set('c', data.c);
        params = params.set('r', this.appDataId);
        params = params.set('rti', data.rti);
        this._isLoading.next(true);
        return this._httpClient.post(this._apiUrl + '/api/coreapi/createApiV1Thinq.php',
            formData,
            {
                params: params,
                observe: 'body' as const,
                responseType: 'text' as const
            }
        ).pipe(
            tap((response: string) => {
                this._isLoading.next(false);
                const appDataId = Number(response);
                this._router.navigate(['/admin/thinq/' + appDataId]);;
            })
        );
    }

    /**
     * Thinq Functions
     */

    changePwd(newPwd: string): Observable<any>
    {
        this._isLoading.next(true);
        return this._authService.changePwd(newPwd)
        .pipe(
            tap((res: string) => {
                this._isLoading.next(false);
            })
        );
    }

    deleteThinq(): Observable<string>
    {
        const formData: FormData = this._authService.getAuthenticationData();
        formData.append('Action', 'Delete');
        formData.append('AppDataId', this.appDataId.toString());
        this._isLoading.next(true);
        return this._httpClient.post(this._apiUrl + '/api/coreapi/doApiV1ThinqFunctions.php',
            formData,
        ).pipe(
            tap((response: string) => {
                this._isLoading.next(false);
                console.log(response);
                if(response === 'OK') {
                    this._router.navigate(['/']);
                }
            })
        );
    }

    runThinqFunction(action: string, params: any): Observable<string>
    {
        const formData: FormData = this._authService.getAuthenticationData();
        formData.append('Action', action);
        for (const key in params) {
            if (Object.prototype.hasOwnProperty.call(params, key)) {
                const value = params[key];
                formData.append(key, value);
            }
        }
        this._isLoading.next(true);
        return this._httpClient.post(this._apiUrl + '/api/coreapi/doApiV1ThinqFunctions.php',
            formData,
        ).pipe(
            tap((response: string) => {
                this._isLoading.next(false);
                console.log(response);
            })
        );
    }

    createAppData(): void
    {
        this._router.navigate(['/admin/create/' + this.appDataId]);
    }

    createRelationship(): void
    {
        this._router.navigate(['/admin/relate/' + this.appDataId]);
    }

    uploadFile(file: File): Observable<string>
    {
        const formData: FormData = this._authService.getAuthenticationData();
        formData.append('r', this.appDataId.toString());
        formData.append('FileUpload', file, file.name);
        this._isLoading.next(true);

        return this._httpClient.post(this._apiUrl + '/api/coreapi/createApiV1UploadDoc.php',
            formData,
            {
                observe: 'body' as const,
                responseType: 'text' as const
            }
        ).pipe(
            tap((response: string) => {
                // this._data.next(response);
                this._isLoading.next(false);
                console.log(response);
            })
        );
    }
    getFileName(response: HttpResponse<Blob>): string {
        let filename: string;
        try {
          const contentDisposition: string = response.headers.get('content-disposition');
          const r = /(?:filename=")(.+)(?:")/;
          filename = r.exec(contentDisposition)[1];
        }
        catch (e) {
          filename = 'myfile.txt';
        }
        return filename;
    }

    downloadDocument(appDataId: number): Observable<HttpResponse<Blob>>
    {
        const formData: FormData = this._authService.getAuthenticationData();
        this._isLoading.next(true);
        return this._httpClient.post(this._apiUrl + '/api/coreapi/getApiV1DMS.php?i=' + appDataId,
            formData,
            {
                observe: 'response' as const,
                responseType: 'blob' as const
            }
        ).pipe(
            tap((response: HttpResponse<Blob>) => {
                const filename: string = this.getFileName(response);
                const binaryData = [];
                binaryData.push(response.body);
                const downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: 'blob' }));
                downloadLink.setAttribute('download', filename);
                document.body.appendChild(downloadLink);
                downloadLink.click();
                this._isLoading.next(false);
            })
        );
    }
}
