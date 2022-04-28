import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { TranslocoService } from '@ngneat/transloco';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignInComponent implements OnInit
{
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signInForm: FormGroup;
    showAlert: boolean = false;

    language: string = 'English';
    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _translocoService: TranslocoService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.signInForm = this._formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void
    {
        // Return if the form is invalid
        if ( this.signInForm.invalid )
        {
            return;
        }

        // Disable the form
        this.signInForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Sign in
        this._authService.signIn(this.signInForm.value)
            .subscribe(
                (res) => {
                    if (res.Authenticated === false) {
                        this.handleAuthError(res);
                    } else {

                        // Set the redirect url.
                        // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
                        // to the correct page after a successful sign in. This way, that url can be set via
                        // routing file and we don't have to touch here.
                        const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

                        // Navigate to the redirect url
                        this._router.navigateByUrl(redirectURL);
                    }

                }
            );
    }

    handleAuthError(error: any): void {
        switch(error.Message) {
            case 'User Name or Password incorrect':
                // Re-enable the form
                this.signInForm.enable();

                // Reset the form
                this.signInNgForm.resetForm();

                // Set the alert
                this.alert = {
                    type   : 'error',
                    message: 'Wrong username or password'
                };

                // Show the alert
                this.showAlert = true;
            break;
        }
    }

    onLangChange(): void {
        if(this.language === 'English') {
            this.language = 'Thai';
            this._translocoService.setActiveLang('th');
        } else {
            this.language = 'English';
            this._translocoService.setActiveLang('en');
        }
    }
}
