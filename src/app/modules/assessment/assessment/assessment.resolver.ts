import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { merge, Observable, of } from 'rxjs';
import { AssessmentService } from './assessment.service';

@Injectable({
    providedIn: 'root'
})
export class AssessmentResolver implements Resolve<any> {
    constructor(
        private _assessmentService: AssessmentService,
        private _authService: AuthService
    ) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const partyId = this._authService.kq_PartyId;
        return merge(
            this._assessmentService.getQuestions(),
            this._assessmentService.getAnswer(partyId)
        );
    }
}
