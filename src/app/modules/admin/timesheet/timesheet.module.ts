import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './timesheet.component';
import { RouterModule } from '@angular/router';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AddTaskComponent } from './dialogs/add-task/add-task.component';
import { SaveTimesheetComponent } from './dialogs/save-timesheet/save-timesheet.component';
import { ThinqFormFieldModule } from '../thinq/thinq-form-field/thinq-form-field.module';
import { AddActivityComponent } from './dialogs/add-activity/add-activity.component';



@NgModule({
  declarations: [
    TimesheetComponent,
    AddTaskComponent,
    SaveTimesheetComponent,
    AddActivityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatMomentDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSidenavModule,
    MatTooltipModule,
    FullCalendarModule,
    ThinqFormFieldModule
  ],
  exports: [
    TimesheetComponent
  ],
})
export class TimesheetModule { }
