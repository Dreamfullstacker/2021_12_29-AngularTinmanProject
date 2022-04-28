import { Route } from '@angular/router';
import { OpportunityDashboardComponent } from './opportunity-dashboard.component';
import { OpportunityDashboardResolver } from './opportunity-dashboard.resolver';

export const opportunityRoutes: Route[] = [
  {
    path     : '',
    component: OpportunityDashboardComponent,
    resolve  : {
      data: OpportunityDashboardResolver
    }
  }
];
