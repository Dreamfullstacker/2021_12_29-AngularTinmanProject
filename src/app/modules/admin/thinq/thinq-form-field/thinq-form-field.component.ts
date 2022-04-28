import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThinqFormField } from 'app/core/thinq/thinq.type';

@Component({
  selector: 'thinq-form-field',
  templateUrl: './thinq-form-field.component.html',
  styleUrls: ['./thinq-form-field.component.scss'],
  encapsulation  : ViewEncapsulation.None,
})
export class ThinqFormfieldComponent implements OnInit {

  @Input() control: FormControl;
  @Input() txlIdField: FormControl;
  @Input() arrField: ThinqFormField;
  @Input() labelVisibility: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
