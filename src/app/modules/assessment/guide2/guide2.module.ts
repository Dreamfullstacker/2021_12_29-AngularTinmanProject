import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Guide2Component } from './guide2.component';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterModule } from '@angular/router';
import { guideRoutes } from './guide2.routing';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
    declarations: [
        Guide2Component
    ],
    imports: [
        RouterModule.forChild(guideRoutes),
        CommonModule,
        MatIconModule,
        MatButtonModule,
        TranslocoModule,
    ]
})
export class Guide2Module { }
