import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardResolver } from './dashboard.resolver';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TranslocoModule } from '@ngneat/transloco';
import { MatExpansionModule } from '@angular/material/expansion';
import { CandidateJobComponent } from './candidate-job/candidate-job.component';
import { CandidateSectionComponent } from './candidate-section/candidate-section.component';

const dashboardRoutes: Route[] = [
    {
        path: '',
        component: DashboardComponent,
        resolve: {
            data: DashboardResolver
        }
    }
];

@NgModule({
    declarations: [
        DashboardComponent,
        CandidateSectionComponent,
        CandidateJobComponent,
    ],
    imports: [
        RouterModule.forChild(dashboardRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatExpansionModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatIconModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSidenavModule,
        NgApexchartsModule,
        TranslocoModule,
        SharedModule,
    ]
})
export class DashboardModule {
}
