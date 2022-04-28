/* eslint-disable @typescript-eslint/naming-convention */
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ThinqFormField } from 'app/core/thinq/thinq.type';
import { activityOptions } from 'app/core/config/timesheet.config';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html'
})
export class AddActivityComponent implements OnInit {

  timesheetForm: FormGroup;
  activityField: ThinqFormField;
  constructor(
    public matDialogRef: MatDialogRef<AddActivityComponent>,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // Create the form
    this.timesheetForm = this._formBuilder.group({
      activity   : ['', [Validators.required]]
    });
    // eslint-disable-next-line @typescript-eslint/naming-convention
    this.activityField = {Type: 'ddl', Label: 'Activity', Options: activityOptions};
  }
  /**
   * Save Activity and close
   */
  submitActivity(): void
  {
    if(this.timesheetForm.invalid) {
      return;
    }
    const activity = this.timesheetForm.controls['activity'].value;
    // Close the dialog
    this.matDialogRef.close(activity);
  }

  /**
   * Discard the message
   */
  discard(): void
  {
    this.timesheetForm.reset({ activity: '' });
    // Close the dialog
    this.matDialogRef.close(null);
  }
}
