import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThinqFormField } from 'app/core/thinq/thinq.type';

@Component({
  selector: 'app-thinq-field-ddl',
  templateUrl: './thinq-field-ddl.component.html',
  styleUrls: ['./thinq-field-ddl.component.scss'],
  encapsulation  : ViewEncapsulation.None
})
export class ThinqFieldDdlComponent implements OnInit {

  @Input() control: FormControl;
  @Input() arrField: ThinqFormField = {
    /* eslint-disable @typescript-eslint/naming-convention */
    Type: 'ddl',
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
    ExcludeFromApi: false,
    ExcludeFromView: false,
    GenerateLink: false,
    GenerateURL: false,
    InheritsFrom: '',
    Valid: true,
    Update: true,
    ErrorMessage: '',
    RenderLevel: '',
    Value: '',
    Changed: '',
    Options: null,
    ChangeAudit: null
  };
  @Input() labelVisibility: boolean;
  blnClearable: boolean = true;
  constructor() { }

  ngOnInit(): void {
    if(this.arrField.Options) {
      const findIndex = this.arrField.Options.findIndex(option => option.value === null || option.value === '');
      this.blnClearable = (findIndex === -1);
    }
  }
}
