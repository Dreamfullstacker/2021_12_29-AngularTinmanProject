import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { KoneQTUtils } from 'app/core/koneqt.utils';
import { DashboardService } from './dashboard.service';
import { CandidateJobs } from 'app/core/assessment/assessment.type';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'app/core/user/user.service';
import { AuthService } from 'app/core/auth/auth.service';
import { Router } from '@angular/router';
import { AssessmentService } from 'app/modules/assessment/assessment/assessment.service';
import { ApiV1GetDataResponse } from 'app/core/admin-view/admin-view.type';
import { rest } from 'lodash';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, OnDestroy {

    candidateJobs: CandidateJobs;
    loading$: Observable<boolean>;
    username: string;
    isProfileCompleted: boolean = false;
    isAllAnswered: boolean = false;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    constructor(
        private _dashboardService: DashboardService,
        private _authService: AuthService,
        private _assessmentService: AssessmentService,
        private _kqUtils: KoneQTUtils,
        private _router: Router,
    ) { }

    /**
     * On init
     */
    ngOnInit(): void {
        this.username = this._authService.kq_FirstName + ' ' + this._authService.kq_LastName;
        this._dashboardService.candidateJobs$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((candidateJobs: CandidateJobs) => {
                if(!candidateJobs || candidateJobs['status'] === 'error') {
                    this.isProfileCompleted = false;
                    this._assessmentService.getAnswer(this._authService.kq_PartyId)
                        .subscribe((res: any) => {
                            const answerIndex = this._kqUtils.getCurrentAnswer(res);
                            if(answerIndex > 60) { this.isAllAnswered = true; }
                            else { this.isAllAnswered = false; }
                        });
                }
                else { this.isProfileCompleted = true; }
                this.candidateJobs = candidateJobs;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    signOut(): void
    {
        this._router.navigate(['/sign-out']);
    }

    finishQA(): void
    {
        this._router.navigate(['/assessment/profile']);
    }

    doQA(): void
    {
        this._router.navigate(['/assessment/help']);
    }
}
