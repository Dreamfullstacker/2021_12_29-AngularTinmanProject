import { Route } from '@angular/router';
import { AssessmentComponent } from './assessment.component';
import { AssessmentResolver } from './assessment.resolver';

export const assessmentRoutes: Route[] = [
    {
        path: '',
        component: AssessmentComponent,
        resolve: {
            data: AssessmentResolver
        }
    }
];
