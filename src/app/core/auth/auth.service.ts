/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { environment } from '../../../environments/environment';
import {
    appVersion,
    CabinetClass,
    Relationship,
    setAppClasses,
    setAppRelations,
    setAppVersion,
    setAppUserPersonae,
    avaliableLangs,
    appPartyRoleArray,
    setAppPartyRoleArray,
    PartyRole
} from 'app/core/config/app.config';
import { UserService } from '../user/user.service';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';

interface RegistrationData {
    FirstName: string;
    LastName: string;
    Password: string;
    Language: string;
    TimeZone: string;
    PortalUniqueIdentifier: string;
    LoginName: string;
    Province: string;
    District: string;
    Suburb: string;
}

@Injectable()
export class AuthService {
    kq_ClientKey: string;
    kq_Token: string;
    kq_PartyId: number;
    kq_UserName: string;
    kq_UserId: number;
    kq_FirstName: string;
    kq_LastName: string;
    kq_Language: string;
    kq_TokenExpires: string;
    private _apiUrl: string = environment.apiEndPoint;
    private kq_Debug: boolean = true;
    private kq_LoggedIn: boolean = false;
    private kq_Message: string = '';
    private requestUpdate: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _userService: UserService,
        private _translocoService: TranslocoService
    ) {
        // Load environment settings
        // Set ClientKey if not yet set
        this.kq_ClientKey = this.kqGet('KQ-ClientKey');
        this.kq_UserId = Number(this.kqGet('KQ-UserId'));
        this.kq_UserName = this.kqGet('KQ-UserName');
        this.kq_FirstName = this.kqGet('KQ-FirstName');
        this.kq_LastName = this.kqGet('KQ-LastName');
        this.kq_Language = this.kqGet('KQ-Language') || 'English';
        this.setLanguage(this.kq_Language);
        this.kq_PartyId = Number(this.kqGet('KQ-PartyId'));
        const partyRoleArray: PartyRole[] = JSON.parse(this.kqGet('KQ-PartyRoleArray'));
        if (partyRoleArray) {
            setAppPartyRoleArray(partyRoleArray);
        }
        this.kq_Token = this.kqGet('KQ-Token');
        this.kq_TokenExpires = this.kqGet('KQ-TokenExpires');
        this.kq_LoggedIn = (this.kqGet('KQ-Authenticated') === 'true');
        if (this.kq_ClientKey == null) {
            console.log('Client key not found, creating');
            this.kqSet('KQ-ClientKey', this.kqRandomString(32));
            this.kq_ClientKey = this.kqGet('KQ-ClientKey');
        } else {
            console.log('Client key exists: ' + this.kq_ClientKey);
        }
        this._userService.user = {
            name: this.kq_UserName,
            userId: this.kq_UserId,
            partyId: this.kq_PartyId,
            firstName: this.kq_FirstName,
            lastName: this.kq_LastName,
            language: this.kq_Language
        };
    }

    /**
     * Sign in
     *
     * @param credentials
     */
    signIn(credentials: { username: string; password: string }): Observable<any> {
        const ApiUrl = this._apiUrl + '/api/doLogin.php';
        const newCredential = this.getCredentialData(credentials);
        return this._httpClient.post<any>(
            ApiUrl,
            newCredential,
        ).pipe(
            switchMap((response: any) => {
                if (response.Authenticated === true) {
                    this.kq_UserName = credentials.username;
                    this.kqSet('KQ-UserName', credentials.username);
                    this.kqLoginSet(response);
                }
                return of(response);
            }),
            catchError((err) => {
                this.handleSignInError(err);
                return of({ error: err });
            })
        );
    }

    /**
     * Sign up
     *
     * @param user
     */
    signUp(user: RegistrationData): Observable<any> {
        const registerData = this.getRegisterData(user);
        return this._httpClient.post<any>(
            this._apiUrl + '/api/portal/tinman/portal_DoRegisterPartyCandidate.php',
            registerData
        ).pipe(
            switchMap((response: any) => {
                console.log(response);
                return of(response);
            }),
            catchError((err) => {
                this.handleSignInError(err);
                return of({ error: err });
            })
        );
    }

    handleSignInError(response: any): void {
        const error = response.error;
        if (!error?.Message) {
            return;
        }
        switch (error.Message) {
            case 'Accept License Agreement':
                error.LicenseAgreement = false;
                error.Authenticated = true;
                this.kqLoginSet(error);
                break;
        }
    }

    getCredentialData(credentials: { username: string; password: string }): FormData {
        const credentialData: FormData = new FormData();
        credentialData.append('ClientKey', this.kq_ClientKey);
        credentialData.append('UserName', credentials.username);
        credentialData.append('Password', credentials.password);
        return credentialData;
    }

    getRegisterData(user: RegistrationData): FormData {
        const registerData: FormData = new FormData();
        registerData.append('FirstName', user.FirstName);
        registerData.append('LastName', user.LastName);
        registerData.append('Password', user.Password);
        registerData.append('Language', user.Language);
        registerData.append('TimeZone', user.TimeZone);
        registerData.append('PortalUniqueIdentifier', user.PortalUniqueIdentifier);
        registerData.append('LoginName', user.LoginName);
        registerData.append('Province', user.Province);
        registerData.append('District', user.District);
        registerData.append('Suburb', user.Suburb);
        return registerData;
    }

    getAuthenticationData(): FormData {
        const authData: FormData = new FormData();
        authData.append('ClientKey', this.kq_ClientKey);
        authData.append('UserName', this.kq_UserName);
        authData.append('Token', this.kq_Token);
        return authData;
    }

    /**
     * Sign out
     */
    signOut(): Observable<any> {
        console.log('About to log out');
        this.kqClear('KQ-Message');
        const ApiUrl = this._apiUrl + '/api/doLogout.php';
        console.log('API URL is: ' + ApiUrl);
        const authData = this.getAuthenticationData();
        this.kqLoginClear();
        return this._httpClient.post<string>(
            ApiUrl,
            authData
        ).pipe(
            switchMap((response: string) => {
                // Clear local settings
                if (response) {
                    this.kqLoginClear();
                }
                return of(response);
            })
        );
    }

    /**
     * Check the authentication status
     */
    check(): Observable<boolean> {
        // Check if the user is logged in
        if (!this.kq_LoggedIn) {
            this.kqLoginClear();
            return of(false);
        }

        // Check the access token availability
        if (!this.kq_Token) {
            this.kqLoginClear();
            return of(false);
        }

        // Check the access token expire date
        if (AuthUtils.isTokenExpired(this.kq_Token, this.kq_TokenExpires)) {
            this.kqLoginClear();
            return of(false);
        }

        // If the access token exists and it didn't expire, sign in using it
        return of(true);
    }

    /**
     * ChangePwd Functions
     */

    changePwd(newPwd: string): Observable<any> {
        const formData: FormData = this.getAuthenticationData();
        formData.append('Action', 'ChangePwd');
        formData.append('AppDataId', this.kq_PartyId.toString());
        formData.append('NewValue', newPwd);
        return this._httpClient.post(this._apiUrl + '/api/coreapi/doApiV1ThinqFunctions.php',
            formData,
        );
    }

    checkAppVersion(): void {
        const version = this.kqGet('KQ-AppVersion');
        const relationship = this.kqGet('KQ-Relationship');
        const classes = this.kqGet('KQ-Class');
        const personae = this.kqGet('KQ-Personae');
        if ((!version || !relationship || !classes || !personae) && !this.requestUpdate) {
            this.requestUpdate = true;
            this.getConstant();
        } else if (version && relationship && classes && personae) {
            const rowPersonae = personae.split(',');
            this.setConstant(version, JSON.parse(relationship), JSON.parse(classes), rowPersonae);
        }
    }

    getConstant(): void {
        const formData: FormData = this.getAuthenticationData();
        this._httpClient.post<any>(this._apiUrl + '/api/getConstants.php',
            formData).subscribe((res: any) => {
                console.log(res);
                this.saveConstant(res);
                const data = res.Data;
                this.setConstant(data.kq_version, data.Relationship, data.Class, data.Personae);
            });
    }

    saveConstant(res: any): void {
        const data = res.Data;
        this.kqSet('KQ-Relationship', JSON.stringify(data?.Relationship ?? {}));
        this.kqSet('KQ-Class', JSON.stringify(data?.Class ?? {}));
        this.kqSet('KQ-AppVersion', data?.kq_version ?? '');
        this.kqSet('KQ-Personae', data?.Personae ?? '');
    }

    setConstant(version: string, relations: Relationship[], classes: CabinetClass[], personae: string[]): void {
        setAppVersion(version);
        setAppRelations(relations);
        setAppClasses(classes);
        setAppUserPersonae(personae);
    }

    // #TODO: Upgradable with typescript typeof check
    // Currently working with config file but would work with getAvailableLangs()
    setLanguage(lang: string = 'English'): void {
        // const avaliableLangs = this._translocoService.getAvailableLangs();
        const activeLang = avaliableLangs.find(lan => lan.label === lang);
        this.kq_Language = lang;
        this._translocoService.setActiveLang(activeLang.id);
        this.kqSet('KQ-Language', lang);
    }

    //Update page variables so that the User is logged in.
    kqLoginSet(data: any): void {

        console.log(data);
        this.kq_LoggedIn = data.Authenticated;
        this.kqSet('KQ-Authenticated', data.Authenticated);
        this.kq_Message = data.Message;
        this.kqSet('KQ-Message', 'Message: ' + data.Message);
        this.kq_FirstName = data.FirstName;
        this.kqSet('KQ-FirstName', data.FirstName);
        this.kq_LastName = data.LastName;
        this.kqSet('KQ-LastName', data.LastName);
        this.setLanguage(data.Language);
        this.kq_Token = data.Token;
        this.kqSet('KQ-Token', data.Token);
        this.kq_TokenExpires = data.TokenExpires;
        this.kqSet('KQ-TokenExpires', data.TokenExpires);
        this.kq_UserId = data.UserId;
        this.kqSet('KQ-UserId', data.UserId);
        this.kq_PartyId = data.PartyId;
        this.kqSet('KQ-PartyId', data.PartyId);
        const partyRoleArray: PartyRole[] = data.PartyRoleArray;
        if (partyRoleArray) {
            setAppPartyRoleArray(partyRoleArray);
            this.kqSet('KQ-PartyRoleArray', JSON.stringify(partyRoleArray));
        }
    }

    kqLoginClear(): void {
        this.kq_LoggedIn = false;
        this.kq_Token = null;
        this.kqSet('KQ-Message', 'User has logged out');
        this.kqClear('KQ-UserId');
        this.kqClear('KQ-PartyId');
        this.kqClear('KQ-PartyRoleArray');
        this.kqClear('KQ-UserName');
        this.kqClear('KQ-FirstName');
        this.kqClear('KQ-LastName');
        this.kqClear('KQ-Language');
        this.kqClear('KQ-Token');
        this.kqClear('KQ-TokenExpires');
        this.kqSet('KQ-Authenticated', false);
    }

    kqSet(setting: string, value: any): void {
        localStorage.setItem('_Setting_' + setting, value);
    }

    kqGet(setting: string): string {
        return localStorage.getItem('_Setting_' + setting);
    }

    kqClear(setting: string): void {
        localStorage.removeItem('_Setting_' + setting);
    }

    // Need a (timed) to periodically check login status and prompt reauthentication
    // if required


    kqRandomString(length: number): string {
        return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
    }
}
