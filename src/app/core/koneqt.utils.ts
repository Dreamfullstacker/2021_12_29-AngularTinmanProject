import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { FuseConfirmationDialogComponent } from '@fuse/services/confirmation/dialog/dialog.component';
import * as moment from 'moment';
import { appConfig } from 'app/core/config/app.config';
import { PROFILE_SECTION } from './config/assessment.config';

@Injectable()
export class KoneQTUtils {
    constructor(
        private _formBuilder: FormBuilder,
        private _fuseConfirmationService: FuseConfirmationService
    ) { }

    public convertToKoneqtDate(date: string | Date): string {
        return moment(new Date(date)).format('DD/M/Y');
    }

    public convertToNormalDate(date: string | Date): string {
        return moment(date, appConfig.timeformat).format('M/D/Y');
    }

    public fuseConfirmDialog(modalConfig: any, msg: string = ''): MatDialogRef<FuseConfirmationDialogComponent, any> {

        const modalForm: FormGroup = this._formBuilder.group(modalConfig);
        // Open the dialog and save the reference of it
        modalForm.controls['message'].setValue(msg);
        const dialogRef = this._fuseConfirmationService.open(modalForm.value);

        return dialogRef;
    }

    getFirstLine(abstract: string): string {
        const lines = abstract.split(' - ');
        return lines[0];
    }

    displayDurationTime(minutes: number = 0, format: string = 'H:mm'): string {
        if (minutes === null) {
            return '';
        }
        return moment().startOf('day').minutes(minutes).format(format);
    }

    displayTime(date: Date, format: string): string {
        return moment(date).format(format);
    }

    getCurrentAnswer(answers: any): number {
        if (answers == null || answers.length === 0) {
            return 0;
        }

        for (let i = 1; i <= 60; i++) {
            const answerField = `Answer${i}`;
            if (answers[answerField] === '') {
                return i;
            }
        }
        return 61;
    }

    countProfileCode(answer: any, answerIndex: number = 60): void {
        for (const profile of PROFILE_SECTION) {
            answer[profile.label] = 0;
            profile.point = 0;
        }
        for (let i = 1; i <= answerIndex; i++) {
            const answerField = `Answer${i}`;
            const interestIndex = this.getProfileIndex(i);
            const profile = PROFILE_SECTION[interestIndex];
            if (answer[answerField] === 'yes') {
                answer[profile.label]++;
                profile.point++;
            }
        }
    }

    getProfileIndex(index: number): number {
        return Math.floor((index - 1) / 10);
    }
}
