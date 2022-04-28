import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PMDashboardComponent } from './pm-dashboard.component';
import { RouterModule } from '@angular/router';
import { pmDashboardRoutes } from './pm-dashboard.routing';
import { PMSearchComponent } from './pm-search/pm-search.component';
import { PMTaskCardComponent } from './pm-task-card/pm-task-card.component';
import { SharedModule } from 'app/shared/shared.module';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PMSideScreenComponent } from './pm-side-screen/pm-side-screen.component';
import { PMCountcardContainerComponent } from './pm-countcard-container/pm-countcard-container.component';
import { ThinqFormFieldModule } from 'app/modules/admin/thinq/thinq-form-field/thinq-form-field.module';



@NgModule({
  declarations: [
    PMDashboardComponent,
    PMSearchComponent,
    PMTaskCardComponent,
    PMSideScreenComponent,
    PMCountcardContainerComponent
  ],
  imports: [
    RouterModule.forChild(pmDashboardRoutes),
    CommonModule,
    CdkTableModule,
    CdkTreeModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSidenavModule,
    NgxPaginationModule,
    ThinqFormFieldModule,
    SharedModule
  ]
})
export class PMDashboardModule { }
