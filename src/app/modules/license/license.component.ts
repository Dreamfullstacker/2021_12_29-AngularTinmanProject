import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { ChangePasswordComponent } from 'app/modules/admin/thinq/dialogs/change-password/change-password.component';
import { AdminViewService } from 'app/modules/admin/admin-view/admin-view.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LicenseComponent implements OnInit {

  licenseHTML: string;
  licenseVersion: number;
  acceptControl: false;
  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _datePipe: DatePipe,
    private _matDialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _adminviewService: AdminViewService
  ) { }

  ngOnInit(): void {
    this.licenseHTML = this._authService.kq_License;
    this.licenseVersion = this._authService.kq_LicenseVersion;
  }

  cancelAccept(): void {

  }

  printLicense(): void {
    window.print();
  }

  acceptLicense(): void {
    let licenseAccepted = 'v' + this.licenseVersion + ' on ';
    licenseAccepted += this._datePipe.transform(new Date(), 'EE MMM d y \'at\' h:m:s');
    console.log(licenseAccepted);
    this._adminviewService.updateField(
      'User',
      this._authService.kq_UserId,
      'LicenseAccepted',
      licenseAccepted
    ).subscribe((res) => {
      console.log(res);
      if(res === true) {
        this.showChangePasswordDialog();
      }
    });
  }

  showChangePasswordDialog(): void {
    // Open the dialog
    const dialogRef = this._matDialog.open(ChangePasswordComponent);

    dialogRef.afterClosed().subscribe((newPwd) => {
      if(newPwd === '') {
        return;
      }
      this._authService.changePwd(newPwd).subscribe((res) => {
        if(res === 'OK') {
          const pwdSnackBarRef = this._snackBar.open('Password changed successfully!', '', {
            duration: 2000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
          });
          pwdSnackBarRef.afterDismissed().subscribe(() => {
            this._authService.kqLoginClear();
            this.redirect('/sign-in');
          });
        }
      });
    });
  }

  redirect(path: string): void {
    this._router.navigate([path]);
  }
}
