import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ThinqFormField } from 'app/core/thinq/thinq.type';

@Component({
  selector: 'app-save-timesheet',
  templateUrl: './save-timesheet.component.html'
})
export class SaveTimesheetComponent implements OnInit {

  timesheetForm: FormGroup;
  descriptionField: ThinqFormField;
  constructor(
    public matDialogRef: MatDialogRef<SaveTimesheetComponent>,
    private _formBuilder: FormBuilder,
    private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    // Create the form
    this.timesheetForm = this._formBuilder.group({
      description   : ['', [Validators.required]]
    });
    // eslint-disable-next-line @typescript-eslint/naming-convention
    this.descriptionField = {Type: 'txa', Label: 'Description'};
  }
  /**
   * Save Description and close
   */
  submitDescription(): void
  {
    if(this.timesheetForm.invalid) {
      return;
    }
    const description = this.timesheetForm.controls['description'].value;
    // Close the dialog
    this.matDialogRef.close(description);
  }

  /**
   * Discard the message
   */
  discard(): void
  {
    this.timesheetForm.reset({ description: '' });
    // Close the dialog
    this.matDialogRef.close(null);
  }
}
