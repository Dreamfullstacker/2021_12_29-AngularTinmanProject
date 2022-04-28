import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'thinq-relation-search',
  templateUrl: './relation-search.component.html',
  encapsulation: ViewEncapsulation.None
})
export class RelationSearchComponent implements OnInit {

  @Input() enabledClasses: string[];
  @Input() classFields: any[];
  @Output() selectCabinet: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchRecord: EventEmitter<any> = new EventEmitter<any>();
  cabinetControl: FormControl = new FormControl();
  fieldControl: FormControl = new FormControl();
  searchInputControl: FormControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
    this.cabinetControl.valueChanges
    .pipe(
      map((value) => {
        console.log(value);
        this.selectCabinet.emit(value);
      })
    ).subscribe();
  }

  searchRecords(): void {
    this.searchRecord.emit({
      cabinet: this.cabinetControl.value,
      searchField: this.fieldControl.value,
      searchQuery: this.searchInputControl.value
    });
  }
}
