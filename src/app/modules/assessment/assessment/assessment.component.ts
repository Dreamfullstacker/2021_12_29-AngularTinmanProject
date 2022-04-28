/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ApiV1GetDataResponse } from 'app/core/admin-view/admin-view.type';
import { AuthService } from 'app/core/auth/auth.service';
import { PROFILE_SECTION } from 'app/core/config/assessment.config';
import { KoneQTUtils } from 'app/core/koneqt.utils';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AssessmentService } from './assessment.service';

@Component({
    selector: 'app-assessment',
    templateUrl: './assessment.component.html',
    styleUrls: ['./assessment.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AssessmentComponent implements OnInit, OnDestroy {

    totalQuestions: number = 60;
    tinmanAnswer: any;
    questions: any;
    questionCount: number;
    isLoading: boolean;
    answerIndex: number = 1;
    isBacked: boolean = false;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private _router: Router,
        private _authService: AuthService,
        private _assessmentService: AssessmentService,
        private _kqUtils: KoneQTUtils
    ) { }

    ngOnInit(): void {
        this._assessmentService.assessments$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((res: ApiV1GetDataResponse) => {
                console.log(res);
                this.questions = res.Data[0];
            });
        this._assessmentService.answer$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((res: ApiV1GetDataResponse) => {
                if (res) {
                    if (res.RowCount === 0) {
                        sessionStorage.removeItem('Tinman_Answer');
                    } else {
                        this.tinmanAnswer = res.Data[0];
                        this.getCurrentAnswer(this.tinmanAnswer);
                        sessionStorage.setItem('Tinman_Answer', JSON.stringify(this.tinmanAnswer));
                    }
                }
            });
        this._assessmentService.isLoading$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((res: boolean) => {
                this.isLoading = res;
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

    getQuestionNumber(): string {
        return 'Question' + this.answerIndex;
    }

    getQuestionTitle(): string {
        return 'Question ' + this.answerIndex;
    }

    getQuestion(): string {
        return this.questions[this.getQuestionNumber()];
    }

    getCurrentAnswer(answer: any): void {
        this.answerIndex = this._kqUtils.getCurrentAnswer(answer);
        this._kqUtils.countProfileCode(answer, this.answerIndex);
    }

    onClickAnswer(answer: 'yes' | 'no'): void {
        
        if(answer == 'yes')
        document.getElementById('maindiv').style.backgroundColor = "#00cc66";
        else document.getElementById('maindiv').style.backgroundColor = "#ff0066";
        // setTimeout(function(){
            let tinmanAnswer = JSON.parse(sessionStorage.getItem('Tinman_Answer')) || this.initialAnswer();
            // Check if candidate back and changed answer
            const isQtyChanged = tinmanAnswer['Answer' + this.answerIndex] !== answer && this.isBacked;
            const qtyChanged = tinmanAnswer['AQtyChanges' + this.answerIndex] || 0;
            const point = answer === 'yes' ? 1 : 0;
            const sectionIndex = Math.floor((this.answerIndex - 1) / 10);
            const profile = PROFILE_SECTION[sectionIndex];
            profile.point += point;
            const newAnswer = {
                ['Answer' + this.answerIndex]: answer,
                ['ATime' + this.answerIndex]: new Date().toISOString(),
                ['AQtyChanges' + this.answerIndex]: isQtyChanged ? qtyChanged + 1 : qtyChanged,
                [profile.label]: profile.point
            };
            tinmanAnswer = {
                ...tinmanAnswer,
                ...newAnswer
            };
            // Save answer to DB
            if (this.answerIndex === 1 && !this.isBacked) {
                console.log('create');
                // Create answer record and save first answer
                this._assessmentService.createAnswer(tinmanAnswer).subscribe((res) => {
                    tinmanAnswer.AppDataId = this._assessmentService.answerId;
                    this.saveAnswers(tinmanAnswer);
                });
            } else {
                this._assessmentService.saveAnswer(newAnswer).subscribe((res) => {
                    if (res === 'true') {
                        this.saveAnswers(tinmanAnswer);
                    }
                });
            };
        // }, 1000);
    }

    onSwipe(event: any): void {
        const answer = Math.abs(event.deltaX) > 40 ? (event.deltaX > 0 ? 'no' : 'yes') : '';
        if (answer && !this.isLoading) {
            this.onClickAnswer(answer);
        }
    }

    saveAnswers(answer: any): void {
        // Save answer to session storage
        document.getElementById('maindiv').style.backgroundColor = "white";
        sessionStorage.setItem('Tinman_Answer', JSON.stringify(answer));
        this.isBacked = false;
        this.answerIndex++;

        if (this.answerIndex > 60) {
            console.log(PROFILE_SECTION);
        }
    }

    initialAnswer(): any {
        return {
            Status: 'InProcess',
            PartyId: this._authService.kq_PartyId,
            Language: this.questions.Language
        };
    }

    onClickBack(): void {
        this.isBacked = true;
        this.answerIndex--;
    }

    canGoBack(): boolean {
        return !this.isBacked && this.answerIndex > 1;
    }

    onQuit(): void {
        this._router.navigateByUrl('/');
    }
}
