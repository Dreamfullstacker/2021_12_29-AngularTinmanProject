import { Route } from '@angular/router';
import { CreateThinqComponent } from './create-thinq.component';
import { CreateThinqResolver } from './create-thinq.resolver';

export const createRoutes: Route[] = [
  {
    path     : '',
    component: CreateThinqComponent,
    resolve  : {
      data: CreateThinqResolver
    }
  }
];
