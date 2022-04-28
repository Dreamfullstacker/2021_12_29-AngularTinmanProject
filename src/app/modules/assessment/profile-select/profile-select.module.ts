import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProfileSelectComponent } from './profile-select.component';
import { RouterModule } from '@angular/router';
import { profileRoutes } from './profile-select.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@ngneat/transloco';
import {MatExpansionModule} from "@angular/material/expansion";



@NgModule({
    declarations: [
        ProfileSelectComponent
    ],
    imports: [
        RouterModule.forChild(profileRoutes),
        CommonModule,
        DragDropModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        TranslocoModule,
        MatExpansionModule
    ]
})
export class ProfileSelectModule { }
