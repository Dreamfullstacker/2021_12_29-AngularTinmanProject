/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ApiV1GetThinqListResponse } from 'app/core/admin-view/admin-view.type';
import { operators, paginationConfig } from 'app/core/config/admin-view.config';
import { validationModalConfig } from 'app/core/config/thinq.config';
import { AdminViewPagination } from 'app/core/thinq/thinq.type';
import { KoneQTUtils } from 'app/core/koneqt.utils';
import { Subject } from 'rxjs';
import { debounceTime, map, takeUntil } from 'rxjs/operators';
import { ThinqService } from '../thinq/thinq.service';
import { AdminViewService } from './admin-view.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminViewComponent implements OnInit, OnDestroy {

  _data: ApiV1GetThinqListResponse;
  _isLoading: boolean;
  _headerClass: any;
  _columns: any[];
  _displayColumns: string[] = ['View'];
  _visibleColumns: any = {View: true};
  _widthColumns: any = {View: 120};
  _cabinet: string;
  _pagination: AdminViewPagination;
  _paginationConfig = paginationConfig;
  pageIndex: number;
  pageSize: number = this._paginationConfig.defaultPageSize;
  _sortQuery = [];
  _filterGroup: FormGroup;
  _rowFormGroup: FormGroup;
  _filterVisible: any = {};
  _filterQuery: any = {};
  _filterColumnOperators = operators;

  selectedField: any = null;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _adminviewService: AdminViewService,
    private _thinqService: ThinqService,
    private _kqUtils: KoneQTUtils
  ) { }

  ngOnInit(): void {
    this._adminviewService.cabinet$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((cabinet: string) => {

          // Update the cabinet
          this._cabinet = cabinet;
          this._sortQuery = [];
      });

    // Get the data
    this._adminviewService.data$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((data: ApiV1GetThinqListResponse) => {

      // Update the data
      this._data = data;
    });

    this._adminviewService.headerClass$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((headerClass: string) => {

          // Update the headerClass
          this._headerClass = headerClass;
      });

    this._adminviewService.columns$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((columns: any[]) => {
        // Update the object columns
        this._columns = columns;
        // Convert to columns array
        const arrayColumn = [];
        for (const key in this._columns) {
          if (Object.prototype.hasOwnProperty.call(this._columns, key)) {
            const element = this._columns[key];
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const colTemp = {...element, FieldName: key};
            arrayColumn.push(colTemp);
          }
        }
        this._displayColumns = ['View'];
        this._widthColumns['View'] = 120;
        this._filterGroup = new FormGroup({});
        this._rowFormGroup = new FormGroup({});
        this._rowFormGroup.addControl('AppDataId', new FormControl(''));
        arrayColumn.filter(field => field.Type !== 'htm')
          .map((field: any) => {
            if (field.ExcludeFromView === false) {
              this._displayColumns.push(field.FieldName);
              this._visibleColumns[field.FieldName] = true;
              // this._widthColumns[field.FieldName] = field.Width;
              this._widthColumns[field.FieldName] = 150;
              this._filterGroup.addControl(field.FieldName, new FormControl(''));
              this._filterVisible[field.FieldName] = false;
            }
            this._rowFormGroup.addControl(field.FieldName, new FormControl(''));
          });
        this._filterGroup.valueChanges
          .pipe(
            debounceTime(300),
            map(() => {
              this.getList();
            })
          ).subscribe();
      });

    // Get the pagination
    this._adminviewService.pagination$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((pagination: AdminViewPagination) => {

        // Update the pagination
        this._pagination = pagination;
      });

    // Get the loading
    this._adminviewService.isLoading$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((isLoading: boolean) => {

        // Update the loading
        this._isLoading = isLoading;
      });
  }

  ngOnDestroy(): void
  {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  getList(): void
  {
    const searchQuery = this.getSearchQuery(this._filterQuery, this._filterGroup.value);
    this._adminviewService.getData(
      this._cabinet,
      this.pageIndex,
      this.pageSize,
      this._sortQuery,
      searchQuery
    ).subscribe();
  }

  paginationChanged(pagination: any): void {
    if ( pagination.pageIndex === 0 ) {
      this.pageSize = pagination.pageSize;
      this.pageIndex = 1;
    } else {
      this.pageIndex = pagination.pageIndex;
    }
    this.getList();
  }

  onFilterOption(value: string, filteredColumn: string): void
  {
    this._filterQuery[filteredColumn] = value;
    // filter;
    this.getList();
  }

  sortCol(e: Sort): void
  {
    this._sortQuery = this._sortQuery.filter(col => col.active !== e.active);
    if (e.direction !== '') {
      this._sortQuery = [...this._sortQuery, e];
    }

    this.getList();
  }

  onOpenThinq(appDataId: string): void
  {
    this._router.navigate(['/admin/thinq/' + appDataId]);
  }

  getSearchQuery(query: any, value: any): any
  {
    const searchQuery = [];
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        const filterValue = value[key];
        if (filterValue) {
          if(query[key] === undefined) {
            query[key] = '*';
          }
          searchQuery.push({
            field: key,
            value: query[key] + filterValue
          });
        } else {
          if(query[key] !== undefined) {
            delete query[key];
          }
        }
      }
    }
    return searchQuery;
  }

  setEditMode(appDataId: number, col: string): void
  {
    // Set value to row formGroup
    const editRow = this._data.Data.find(row => row.AppDataId === appDataId);
    for (const key in this._rowFormGroup.controls) {
      if (Object.prototype.hasOwnProperty.call(this._rowFormGroup.controls, key)) {
        const control = this._rowFormGroup.controls[key];
        let fieldValue = editRow[key].toString();
        if (this._columns[key] && this._columns[key].Type === 'dte') {
          fieldValue = this._kqUtils.convertToKoneqtDate(fieldValue);
        }
        control.setValue(fieldValue);
      }
    }
    if(this._columns[this.selectedField?.fieldName]?.Type === 'txa') {
      this._widthColumns[this.selectedField?.fieldName] = 150;
    }
    if(this._columns[col].Type === 'txa') {
      this._widthColumns[col] = 300;
    }
    this.selectedField = {
      appDataId: appDataId,
      fieldName: col
    };
    // for
  }

  onUpdateField(): void
  {
    if (!this.selectedField) {
      return;
    }
    this._isLoading = true;
    if (this._columns[this.selectedField.fieldName].Type !== 'txl') {
      // single field update
      const fieldValue = this._rowFormGroup.controls[this.selectedField.fieldName].value;
      this._adminviewService.updateField(
        this._cabinet,
        this.selectedField.appDataId,
        this.selectedField.fieldName,
        fieldValue
      ).subscribe((res) => {
        this._isLoading = false;
        if(res === true) {
          this._snackBar.open('Saved successfully!', '', {
            duration: 2000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
          });
          this.getList();
        } else {
          this._kqUtils.fuseConfirmDialog(validationModalConfig, 'Update field failed');
        }
      });
    } else {
      // multiple fields update
      this._thinqService.saveForm(this._rowFormGroup.value).subscribe(
        (res) => {
          this._isLoading = false;
          if(res['Data'] === 'OK') {
            this._snackBar.open('Saved successfully!', '', {
              duration: 2000,
              horizontalPosition: 'end',
              verticalPosition: 'bottom',
            });
            this.getList();
          } else {
            this._kqUtils.fuseConfirmDialog(validationModalConfig, res.Data);
          }
        }
      );
    }
    if(this._columns[this.selectedField.fieldName].Type === 'txa') {
      this._widthColumns[this.selectedField.fieldName] = 150;
    }
    this.selectedField = null;
  }

  getFieldControl(column: string): AbstractControl {
    return this._rowFormGroup.controls[column];
  }

  getArrField(fieldName: string): any {
    return this._columns[fieldName];
  }

  getTxlControl(fieldName: string): any {
    const thinqTxlField = this._columns[fieldName];
    if(thinqTxlField.Type !== 'txl' || !thinqTxlField.Lookup?.id) {
      return null;
    }
    const txlIdField = thinqTxlField.Lookup['id'];
    if(txlIdField && this._rowFormGroup.get(txlIdField)) {
      return this._rowFormGroup.controls[txlIdField];
    }
    return null;
  }

  filterColumn(): string[] {
    return this._displayColumns.filter(col => this._visibleColumns[col]);
  }
}
