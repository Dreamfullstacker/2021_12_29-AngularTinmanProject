import { Route } from '@angular/router';
import { AuthSignUpComponent } from 'app/modules/auth/sign-up/sign-up.component';

export const authSignUpRoutes: Route[] = [
    {
        path: '',
        component: AuthSignUpComponent
    }
];
