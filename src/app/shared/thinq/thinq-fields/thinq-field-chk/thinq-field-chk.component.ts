import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThinqFormField } from 'app/core/thinq/thinq.type';

@Component({
  selector: 'app-thinq-field-chk',
  templateUrl: './thinq-field-chk.component.html',
  styleUrls: ['./thinq-field-chk.component.scss']
})
export class ThinqFieldChkComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }
}
