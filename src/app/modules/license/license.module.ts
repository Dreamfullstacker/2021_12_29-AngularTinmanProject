import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LicenseComponent } from './license.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { licenseRoutes } from './license.routing';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    LicenseComponent
  ],
  imports: [
    RouterModule.forChild(licenseRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    LicenseComponent
  ],
  providers: [DatePipe],
})
export class LicenseModule { }
