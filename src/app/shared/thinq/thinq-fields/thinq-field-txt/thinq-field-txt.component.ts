import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThinqFormField } from 'app/core/thinq/thinq.type';

@Component({
  selector: 'app-thinq-field-txt',
  templateUrl: './thinq-field-txt.component.html',
  styleUrls: ['./thinq-field-txt.component.scss'],
  encapsulation  : ViewEncapsulation.None,
})
export class ThinqFieldTxtComponent implements OnInit {

  @Input() control: FormControl;
  @Input() arrField: ThinqFormField = {
    /* eslint-disable @typescript-eslint/naming-convention */
    Type: 'txt',
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
  constructor() { }

  ngOnInit(): void {
  }

}
