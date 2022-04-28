import { Route } from '@angular/router';
import { PMDashboardComponent } from './pm-dashboard.component';
import { PMDashboardResolver } from './pm-dashboard.resolver';

export const pmDashboardRoutes: Route[] = [
  {
    path     : '',
    component: PMDashboardComponent,
    resolve  : {
      data: PMDashboardResolver
    }
  }
];
