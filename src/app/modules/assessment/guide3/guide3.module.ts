import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Guide3Component } from './guide3.component';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterModule } from '@angular/router';
import { guideRoutes } from './guide3.routing';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
    declarations: [
        Guide3Component
    ],
    imports: [
        RouterModule.forChild(guideRoutes),
        CommonModule,
        MatIconModule,
        MatButtonModule,
        TranslocoModule,
    ]
})
export class Guide3Module { }
