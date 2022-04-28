import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from 'app/core/auth/auth.service';

@NgModule({
    imports  : [
        HttpClientModule
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule
{
}
