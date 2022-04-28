import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityDashboardComponent } from './opportunity-dashboard.component';
import { RouterModule } from '@angular/router';
import { opportunityRoutes } from './opportunity-dashboard.routing';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CoreModule } from 'app/core/core.module';
import { AppModule } from 'app/app.module';
import { ShortNumberPipe } from 'app/shared/pipe/short-number.pipe';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    OpportunityDashboardComponent
  ],
  imports: [
    RouterModule.forChild(opportunityRoutes),
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonToggleModule,
    NgApexchartsModule,
    SharedModule
  ]
})
export class OpportunityDashboardModule { }
