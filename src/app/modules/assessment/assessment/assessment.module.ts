import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentComponent } from './assessment.component';
import { RouterModule } from '@angular/router';
import { assessmentRoutes } from './assessment.routing';
import { TranslocoModule } from '@ngneat/transloco';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FinalComponent } from './final/final.component';
import { HammerModule } from '@angular/platform-browser';
import {LayoutModule} from "../../../layout/layout.module";
@NgModule({
    declarations: [
        AssessmentComponent,
        FinalComponent
    ],
    imports: [
        RouterModule.forChild(assessmentRoutes),
        TranslocoModule,
        HammerModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        CommonModule,
        LayoutModule
    ]
})
export class AssessmentModule { }
