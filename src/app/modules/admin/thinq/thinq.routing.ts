import { Route } from '@angular/router';
import { ThinqComponent } from './thinq.component';
import { ThinqResolver } from './thinq.resolver';

export const thinqRoutes: Route[] = [
    {
        path     : '',
        component: ThinqComponent,
        resolve  : {
            data: ThinqResolver
        }
    }
];
