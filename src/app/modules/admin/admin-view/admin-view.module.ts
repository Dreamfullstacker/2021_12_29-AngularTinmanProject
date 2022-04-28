import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AdminViewComponent } from './admin-view.component';
import { adminviewRoutes } from './admin-view.routing';
import { SharedModule } from 'app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxPaginationModule } from 'ngx-pagination';
import { ThinqFormFieldModule } from '../thinq/thinq-form-field/thinq-form-field.module';



@NgModule({
  declarations: [
    AdminViewComponent,
  ],
  imports: [
    RouterModule.forChild(adminviewRoutes),
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatPaginatorModule,
    MatDividerModule,
    MatRippleModule,
    MatProgressBarModule,
    MatSortModule,
    MatTableModule,
    MatSnackBarModule,
    NgxPaginationModule,
    ThinqFormFieldModule,
    SharedModule
  ]
})
export class AdminViewModule { }
