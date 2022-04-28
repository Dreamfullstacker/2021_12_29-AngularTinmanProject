import { DatePipe } from '@angular/common';
import { Component, DoCheck, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThinqFormField } from 'app/core/thinq/thinq.type';
import { KoneQTUtils } from 'app/core/koneqt.utils';

@Component({
  selector: 'app-thinq-field-dte',
  templateUrl: './thinq-field-dte.component.html',
  styleUrls: ['./thinq-field-dte.component.scss'],
  providers: [ DatePipe ],
  encapsulation  : ViewEncapsulation.None,
})
export class ThinqFieldDteComponent implements DoCheck {

  @Input() control: FormControl;
  @Input() arrField: ThinqFormField = {
    /* eslint-disable @typescript-eslint/naming-convention */
    Type: 'dte',
    DataType: 'txt',
    Label: '',
    Width: 50,
    Format: '',
    Align: '' ,
    //22/10/2018 NR added for fields to be logged
    AuditStatus: false,
    Mandatory: false,
    ReadOnly: false,
    Default: '',
    ExcludeFromSearch: false,
    ExcludeFromView: false,
    ExcludeFromApi: false,
    GenerateLink: false,
    GenerateURL: false,
    InheritsFrom: '',
    Valid: true,
    Update: true,
    ErrorMessage: '',
    RenderLevel: '',
    Value: '',
    Changed: '',
    ChangeAudit: null
  };
  @Input() labelVisibility: boolean;
  dateControl: FormControl;
  oldDate: string = null;

  constructor(
    private _datePipe: DatePipe,
    private _kqUtils: KoneQTUtils
  ) { }

  ngDoCheck(): void {
    if (this.control.value !== this.oldDate) {
      if(!this.oldDate) {
        this.dateControl = new FormControl();
        this.dateControl.valueChanges.subscribe(
          (date) => {
            if(!date) {
              this.control.setValue('');
            } else {
              const stringD = this._kqUtils.convertToKoneqtDate(date);
              this.control.setValue(stringD);
            }
          }
        );
        const d = new Date(this.control.value);
        if (!isNaN(d.getTime())) {
          this.dateControl.setValue(d);
        } else {
          this.control.setValue('');
        }
        this.oldDate = this.control.value.toString();
      } else {
        const d = new Date(this.control.value);
        if (!isNaN(d.getTime())) {
          this.dateControl.setValue(d);
        } else {
          this.control.setValue('');
        }
      }
    }
  }
}
