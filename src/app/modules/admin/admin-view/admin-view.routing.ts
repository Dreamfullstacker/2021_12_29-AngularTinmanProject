import { Route } from '@angular/router';
import { AdminViewComponent } from './admin-view.component';
import { AdminViewResolver } from './admin-view.resolver';

export const adminviewRoutes: Route[] = [
    {
        path     : '',
        component: AdminViewComponent,
        resolve  : {
            data: AdminViewResolver
        }
    }
];
