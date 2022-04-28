import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthSignUpComponent } from './sign-up.component';
import { RouterModule } from '@angular/router';
import { authSignUpRoutes } from './sign-up.routing';
import { TranslocoModule } from '@ngneat/transloco';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseAlertModule } from '@fuse/components/alert';
import { FuseCardModule } from '@fuse/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { LocationComponent } from 'app/shared/components/location/location.component';



@NgModule({
    declarations: [
        AuthSignUpComponent,
        LocationComponent
    ],
    imports: [
        RouterModule.forChild(authSignUpRoutes),
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        FuseCardModule,
        FuseAlertModule,
        TranslocoModule,
        SharedModule,
    ]
})
export class AuthSignUpModule { }
