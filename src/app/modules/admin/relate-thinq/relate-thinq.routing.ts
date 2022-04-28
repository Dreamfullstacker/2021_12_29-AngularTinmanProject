import { Route } from '@angular/router';
import { RelateThinqComponent } from './relate-thinq.component';
import { RelateThinqResolver } from './relate-thinq.resolver';

export const relateRoutes: Route[] = [
  {
    path     : '',
    component: RelateThinqComponent,
    resolve  : {
      data: RelateThinqResolver
    }
  }
];
