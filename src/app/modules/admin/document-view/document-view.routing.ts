import { Route } from '@angular/router';
import { DocumentViewComponent } from './document-view.component';
import { DocumentViewResolver } from './document-view.resolver';

export const documentViewRoutes: Route[] = [
    {
        path     : '',
        component: DocumentViewComponent,
        resolve  : {
            data: DocumentViewResolver
        }
    }
];
