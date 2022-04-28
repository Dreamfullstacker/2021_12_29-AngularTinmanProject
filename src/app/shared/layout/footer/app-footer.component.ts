import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdminViewPagination } from 'app/core/thinq/thinq.type';
import { FooterButtonData } from 'app/layout/layout.types';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppFooterComponent implements OnInit {

  @Input() accessOption: any;
  @Input() buttons: FooterButtonData[];
  @Input() pagination: AdminViewPagination = null;
  @Input() paginationConfig: any = null;
  @Output() clickButton: EventEmitter<any> = new EventEmitter<any>();
  @Output() paginationChanged: EventEmitter<any> = new EventEmitter<any>();
  _pageSizeControl: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {

    if(this.pagination) {
      this._pageSizeControl.setValue(this.paginationConfig.defaultPageSize);
    }
  }

  getPage(pageIndex: number): void {

    this.paginationChanged.emit({
      pageSize: this._pageSizeControl.value,
      pageIndex: pageIndex
    });
  }

  pageSizeChanged(pageSize: number): void {
    this.paginationChanged.emit({
      pageSize: pageSize,
      pageIndex: 0
    });
  }

  onSaveForm(): void {
    this.clickButton.emit({
      clickAction: 'SaveForm',
      clickData: null
    });
  }

  createRelatedThinq(): void {
    this.clickButton.emit({
      clickAction: 'CreateRelatedThinq',
      clickData: null
    });
  }

  resetForm(): void {
    this.clickButton.emit({
      clickAction: 'ResetForm',
      clickData: null
    });
  }

  deleteThinq(): void {
    this.clickButton.emit({
      clickAction: 'DeleteThinq',
      clickData: null
    });
  }

  createRelationship(): void {
    this.clickButton.emit({
      clickAction: 'CreateRelationship',
      clickData: null
    });
  }

  onClick(props: any): void {
    this.clickButton.emit(props);
  }
}
