/* eslint-disable @typescript-eslint/naming-convention */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { KoneQTUtils } from 'app/core/koneqt.utils';
import { ThinqFormField } from 'app/core/thinq/thinq.type';
import { PMFilterForm } from '../pm-dashboard.type';

@Component({
  selector: 'pm-dashboard-searchbar',
  templateUrl: './pm-search.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PMSearchComponent implements OnInit {

  @Input() userArray: any[];
  @Input() filterForm: PMFilterForm;
  @Output() filterEvent: EventEmitter<PMFilterForm> = new EventEmitter<PMFilterForm>();
  searchForm: FormGroup = new FormGroup({});
  searchFields: ThinqFormField[] = [];
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    for (const key in this.filterForm) {
      if (Object.prototype.hasOwnProperty.call(this.filterForm, key)) {
        const filter = this.filterForm[key];
        this.searchForm.addControl(key, this._formBuilder.control(filter, Validators.required));
      }
    }
    this.searchFields = [
      { Type: 'dte', Label: 'Date From', Value: this.filterForm.dateFrom },
      { Type: 'dte', Label: 'Date To', Value: this.filterForm.dateTo },
      { Type: 'toggle', Label: 'Ignore Closed Tasks?' },
      { Type: 'toggle', Label: 'Ignore Time' },
      { Type: 'ddl', Label: 'Select User', Options: this.userArray },
      { Type: 'ddl', Label: 'Select Owner', Options: this.userArray },
    ];
  }

  setFilterValue(): void {
    this.searchForm.setValue(this.filterForm);
    this.applyFilter();
  }

  applyFilter(): void {
    this.filterEvent.emit(this.searchForm.value);
  }

  getField(label: string): string {
    switch(label) {
      case 'Date From':
        return 'dateFrom';
      case 'Date To':
        return 'dateTo';
      case 'Ignore Closed Tasks?':
        return 'blnIgnoreClosed';
      case 'Ignore Time':
        return 'blnIgnoreDate';
      case 'Select User':
        return 'selectUser';
      case 'Select Owner':
        return 'selectOwner';
    }
  }
}
