/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseAlertType } from '@fuse/components/alert';
import { TranslocoService } from '@ngneat/transloco';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html'
})
export class AuthSignUpComponent implements OnInit {

    @ViewChild('signUpNgForm') signUpNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    signUpForm: FormGroup;
    showAlert: boolean = false;

    provinceCtrl = new FormControl('', [Validators.required]);
    districtCtrl = new FormControl('', [Validators.required]);
    subDistrictCtrl = new FormControl('', [Validators.required]);

    language: string = 'English';
    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _router: Router,
        private _translocoService: TranslocoService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.signUpForm = new FormGroup({
            FirstName: new FormControl('', [Validators.required]),
            LastName: new FormControl('', Validators.required),
            Password: new FormControl('', Validators.required),
            Province: this.provinceCtrl,
            District: this.districtCtrl,
            Suburb: this.subDistrictCtrl,
            Language: new FormControl(this.language, Validators.required),
            TimeZone: new FormControl('Asia/Bangkok', Validators.required),
            PortalUniqueIdentifier : new FormControl('', Validators.required),
            LoginName: new FormControl('', Validators.required),
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign Up
     */
    signUp(): void {
        // Return if the form is invalid
        if (this.signUpForm.invalid) {
            return;
        }

        // Disable the form
        this.signUpForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Sign up
        this._authService.signUp(this.signUpForm.value)
            .subscribe(
                (response) => {

                    // Navigate to the sign in page
                    this._router.navigateByUrl('/sign-in');
                },
                (response) => {

                    // Re-enable the form
                    this.signUpForm.enable();

                    // Reset the form
                    this.signUpNgForm.resetForm();

                    // Set the alert
                    this.alert = {
                        type   : 'error',
                        message: 'Something went wrong, please try again.'
                    };

                    // Show the alert
                    this.showAlert = true;
                }
            );
    }

    // Change language based on button pressed in signup form
    onLangChange(): void {
        if(this.language === 'English') {
            this.language = 'Thai';
            this._translocoService.setActiveLang('th');
        } else {
            this.language = 'English';
            this._translocoService.setActiveLang('en');
        }
        this.signUpForm.get('Language').setValue(this.language);
    }
}
