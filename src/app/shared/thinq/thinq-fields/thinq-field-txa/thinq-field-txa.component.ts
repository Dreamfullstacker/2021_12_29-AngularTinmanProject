import { DatePipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { ThinqFormField } from 'app/core/thinq/thinq.type';
import { UserService } from 'app/core/user/user.service';

@Component({
  selector: 'app-thinq-field-txa',
  templateUrl: './thinq-field-txa.component.html',
  styleUrls: ['./thinq-field-txa.component.scss'],
  encapsulation  : ViewEncapsulation.None,
})
export class ThinqFieldTxaComponent implements OnInit {

  @Input() control: FormControl;
  @Input() arrField: ThinqFormField = {
    /* eslint-disable @typescript-eslint/naming-convention */
    Type: 'txa',
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
  @ViewChild('textarea') private _textarea: ElementRef;
  constructor(
    private _datePipe: DatePipe,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onAddTag(): void {
    // serch identify
    let txt: string = this.control.value;
    const index = txt.search('#COMMENTS:\n');
    if(index === -1) {
      txt += '\n#COMMENTS:\n';
      txt += this._datePipe.transform(new Date(), 'd MMM y H:M ');
      txt += this._userService.user.email + ': ';
      this.control.setValue(txt);
    } else {
      let newLine = this._datePipe.transform(new Date(), 'd MMM y H:M ');
      newLine += this._userService.user.name + ': \n';
      const txt2 = txt.substring(0, index + 11) + newLine + txt.substring(index + 11);
      this.control.setValue(txt2);
      this._textarea.nativeElement.setSelectionRange(index + 10 + newLine.length, index + 10 + newLine.length);
    }
  }
}
