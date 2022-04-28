import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'app/shared/shared.module';
import { ThinqComponent } from './thinq.component';
import { thinqRoutes } from './thinq.routing';
import { ThinqFormComponent } from './thinq-form/thinq-form.component';
import { ThinqRelationComponent } from './thinq-relation/thinq-relation.component';
import { MatSelectModule } from '@angular/material/select';
import { DatePipe } from '@angular/common';
import { ThinqAuditComponent } from './thinq-audit/thinq-audit.component';
import { ChangePasswordComponent } from './dialogs/change-password/change-password.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThinqFormFieldModule } from './thinq-form-field/thinq-form-field.module';
import { TimesheetModule } from '../timesheet/timesheet.module';
import { A11yModule } from '@angular/cdk/a11y';



@NgModule({
    declarations: [
        ThinqComponent,
        ThinqFormComponent,
        ThinqRelationComponent,
        ThinqAuditComponent,
        ChangePasswordComponent
    ],
    imports: [
        RouterModule.forChild(thinqRoutes),
        A11yModule,
        FormsModule,
        ReactiveFormsModule,
        NgxDropzoneModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatPaginatorModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatDialogModule,
        MatSnackBarModule,
        ThinqFormFieldModule,
        TimesheetModule,
        SharedModule,
    ],
    providers: [DatePipe],
})
export class ThinqModule
{
}
