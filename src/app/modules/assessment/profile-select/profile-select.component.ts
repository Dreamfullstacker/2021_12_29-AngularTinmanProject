import {
    CdkDrag,
    CdkDragDrop,
    CdkDropList,
    moveItemInArray,
    transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import {
    ProfilePoint,
    PROFILE_SECTION,
} from 'app/core/config/assessment.config';
import { KoneQTUtils } from 'app/core/koneqt.utils';
import { groupBy, keys } from 'lodash';
import { AssessmentService } from '../assessment/assessment.service';

interface ProfileResult {
    point: number;
    results: ProfilePoint[];
}

@Component({
    selector: 'app-profile-select',
    templateUrl: './profile-select.component.html',
    styleUrls: ['./profile-select.component.scss'],
})
export class ProfileSelectComponent implements OnInit {

    answerId: number;
    profileResults: ProfileResult[];
    displayResults: ProfilePoint[];
    finalResults: ProfilePoint[];
    _tinmanAnswer: any;

    constructor(
        private _router: Router,
        private _authService: AuthService,
        private _assessmentService: AssessmentService,
        private _kqUtils: KoneQTUtils
    ) {}

    ngOnInit(): void {

        this.finalResults = [];
        this.displayResults = [];

        this._tinmanAnswer = JSON.parse(
            sessionStorage.getItem('Tinman_Answer')
        );
        if (!this._tinmanAnswer) {
            const partyId = this._authService.kq_PartyId;
            this._assessmentService.getAnswer(partyId).subscribe((res: any) => {
                this.answerId = res.AppDataId;
                this._tinmanAnswer = res;
                this._kqUtils.countProfileCode(res);
                this.sortProfiles();
            });
        } else {
            this.answerId = this._tinmanAnswer.AppDataId;
            this._kqUtils.countProfileCode(this._tinmanAnswer);
            this.sortProfiles();
        }
    }

    sortProfiles(): void {
        const profilePoints = groupBy(PROFILE_SECTION, 'point');
        const sortedKeys = keys(profilePoints).sort((a: any, b: any) => b - a);
        this.profileResults = [];
        for (const point of sortedKeys) {
            this.profileResults.push({
                point: Number(point),
                results: profilePoints[point],
            });
        }
        this.getInitialTopProfiles();
    }

    getInitialTopProfiles(): void {
        let count = 0;
        this.finalResults = [];
        this.displayResults = [];
        for (let i = 0; i < this.profileResults.length; i++) {
            const profileResult = this.profileResults[i];
            const len = profileResult.results.length;
            if (len === 1) {
                profileResult.results[0].isFinal = true;
                this.finalResults.push(...profileResult.results);
            } else if (len === 2 && i === 0) {
                profileResult.results[0].canReturn = false;
                profileResult.results[1].canReturn = false;
                this.finalResults.push(...profileResult.results);
            } else {
                this.displayResults.push(...profileResult.results);
            }
            count += len;
            if (count >= 3) {
                break;
            }
        }
    }

    drop(event: CdkDragDrop<string[]>): void {
        if (event.previousContainer === event.container) {
            moveItemInArray(
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        }
    }
    availableEnterPredicate(drag: CdkDrag<ProfilePoint>): boolean {
        const canEnter = drag.data.canReturn ?? true;
        console.log(drag.data.canReturn, canEnter);
        return canEnter;
    }

    /** Predicate function that only allows even numbers to be dropped into a list. */
    finalEnterPredicate(finalResults: ProfilePoint[]): any {
        const isEnterable = finalResults?.length < 3;
        return (_drag: CdkDrag, _drop: CdkDropList): boolean => isEnterable;
    }
    /**
     * Predicate function that only allows even numbers to be
     * sorted into even indices and odd numbers at odd indices.
     */
    finalSortPredicate(finalResults: ProfilePoint[]): any {
        return (index: number, item: CdkDrag<ProfilePoint>): boolean => {
            const itemIndex = finalResults.findIndex(
                re => re.label === item.data.label
            );
            return (
                finalResults[index]?.point === item.data.point ||
                (finalResults[index]?.point < item.data.point &&
                    index < itemIndex)
            );
        };
    }

    onFinalResult(): void {
        this._assessmentService
            .saveTopProfiles(this.answerId, this.finalResults)
            .subscribe((res) => {
                this._router.navigateByUrl('/');
            });
    }
}
