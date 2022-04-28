import { Injectable } from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { CandidateJobs } from 'app/core/assessment/assessment.type';
import { Observable } from 'rxjs';
import { DashboardService } from './dashboard.service';

@Injectable({
    providedIn: 'root'
})
export class DashboardResolver implements Resolve<CandidateJobs> {
    constructor(
        private _dashboardService: DashboardService
    ) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CandidateJobs> {
        return this._dashboardService.getCandiateJobs();
    }
}
