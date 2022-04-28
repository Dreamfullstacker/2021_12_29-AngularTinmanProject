import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThinqResponse } from 'app/core/thinq/thinq.type';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThinqFormComponent } from './thinq-form/thinq-form.component';
import { ThinqService } from './thinq.service';
import { deleteModalConfig, validationModalConfig } from 'app/core/config/thinq.config';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from './dialogs/change-password/change-password.component';
import { KoneQTUtils } from 'app/core/koneqt.utils';
import { RelateThinqService } from '../relate-thinq/relate-thinq.service';

@Component({
  selector: 'app-thinq',
  templateUrl: './thinq.component.html',
  styleUrls: ['./thinq.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThinqComponent implements OnInit, OnDestroy {

  @ViewChild('thinqform') _thinqFormView: ThinqFormComponent;
  data: ThinqResponse;
  relationships: any[];
  relationshipOptions: any[];
  _isLoading$: Observable<boolean>;
  files: File[] = [];
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(
    private _thinqService: ThinqService,
    private _relateThinqService: RelateThinqService,
    private _datePipe: DatePipe,
    private _kqUtils: KoneQTUtils,
    private _matDialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    // Get the data
    this._thinqService.data$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((data) => {
      // Store the data
      this.data = data;
      console.log(this.data);
    });
    // Get the relations
    this._relateThinqService.existingRelations$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((relations) => {
      // Store the data
      this.relationships = relations;
    });
    this._isLoading$ = this._thinqService.isLoading$;
  }

  ngOnDestroy(): void
  {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  onSelect(event): void {
    this.files.push(...event.addedFiles);
    // upload file logic
    this._thinqService.uploadFile(event.addedFiles[0]).subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

  onRemove(event: File): void {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  getSubTitle(createdBy: string, createdDate: string): string {
    return 'Created by ' + createdBy + ' at ' + this._datePipe.transform(new Date(createdDate), 'EEEE d\'th\' of MMMM y \'at\' H:M');
  }

  onClickFooterButton(props: any): void {
    const {clickAction, clickData} = props;
    switch(clickAction) {
      case 'SaveForm':
        this.saveForm();
      break;
      case 'ResetForm':
        this.resetForm();
      break;
      case 'CreateRelatedThinq':
        this.createRelatedThinq();
      break;
      case 'CreateRelationship':
        this.createRelationship();
      break;
      case 'Create':
        this.createThinq(clickData);
      break;
      case 'showChangePasswordDialog':
        this.showChangePasswordDialog();
      break;
      case 'DeleteThinq':
        this.deleteConfirmDialog();
      break;
    }
  }

  saveForm(): void {
    this._thinqService.saveForm(this._thinqFormView.thinqForm.value).subscribe(
      (res) => {
        if(res['Data'] === 'OK') {
          this._snackBar.open('Saved successfully!', '', {
            duration: 2000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
          });
        } else {
          this.validationDialog(res.Data);
        }
      }
    );
  }

  resetForm(): void {
    this._thinqFormView.resetForm();
  }

  createRelatedThinq(): void {
    this._thinqService.createAppData();
  }

  createThinq(data: any): void {
    console.log(data);
    this._thinqService.createThinq(data).subscribe();
  }

  createRelationship(): void {
    this._thinqService.createRelationship();
  }

  showChangePasswordDialog(): void {
    // Open the dialog
    const dialogRef = this._matDialog.open(ChangePasswordComponent);

    dialogRef.afterClosed().subscribe((newPwd) => {
      if(!newPwd) {
        return;
      }
      this._thinqService.changePwd(newPwd).subscribe((res) => {
        if(res === 'OK') {
          this._snackBar.open('Password changed successfully!', '', {
            duration: 2000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
          });
        }
      });
    });
  }

  deleteConfirmDialog(): void {
    // Open the dialog and save the reference of it
    const dialogRef = this._kqUtils.fuseConfirmDialog(deleteModalConfig);

    // Subscribe to afterClosed from the dialog reference
    dialogRef.afterClosed().subscribe((result) => {
      if(result === 'confirmed') {
        this._thinqService.deleteThinq().subscribe();
      }
    });
  }

  validationDialog(msg: string): void {
    const dialogRef = this._kqUtils.fuseConfirmDialog(validationModalConfig, msg);

    // Subscribe to afterClosed from the dialog reference
    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
