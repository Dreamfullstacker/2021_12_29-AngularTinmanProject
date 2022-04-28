import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Guide4Component } from './guide4.component';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterModule } from '@angular/router';
import { guideRoutes } from './guide4.routing';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
    declarations: [
        Guide4Component
    ],
    imports: [
        RouterModule.forChild(guideRoutes),
        CommonModule,
        MatIconModule,
        MatButtonModule,
        TranslocoModule,
    ]
})
export class Guide4Module { }
