import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { KoneQTUtils } from 'app/core/koneqt.utils';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RelateThinqService } from './relate-thinq.service';
@Component({
  selector: 'app-relate-thinq',
  templateUrl: './relate-thinq.component.html',
  styleUrls: ['./relate-thinq.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RelateThinqComponent implements OnInit {

  _isLoading$: Observable<boolean>;
  _existingRelations: any[];
  _searchRelations: any[];
  _enabledClassesId: any[];
  _enabledClassesString: string[];
  _classFields: string[];
  _relationshipOptions: string[];
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _relateThinqService: RelateThinqService
  ) { }

  ngOnInit(): void {
    // Get the loading
    this._isLoading$ = this._relateThinqService.isLoading$;
    this._relateThinqService.existingRelations$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((res) => {
      console.log('existingRelations', res);
      this._existingRelations = res;
    });
    this._relateThinqService.relationsFirstLevel$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((res) => {
      console.log('relationsFirstLevel', res);
      if(res) {
        this._searchRelations = res;
      }
    });
    this._relateThinqService.relatedSearchResult$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((res) => {
      console.log('relatedSearchResult', res);
      if(res) {
        this._searchRelations = res;
      }
    });
    this._relateThinqService.enabledClassesString$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((res) => {
      console.log('enabledClassesString', res);
      this._enabledClassesString = res;
    });
    this._relateThinqService.enabledClassesId$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((res) => {
      console.log('enabledClassesID', res);
      this._enabledClassesId = res;
    });
    this._relateThinqService.classFields$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((res) => {
      console.log('classFields', res);
      this._classFields = res;
    });
    this._relateThinqService.relationshipOptions$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((res) => {
      console.log('relationshipOptions', res);
      this._relationshipOptions = res;
    });
  }

  onSelectCabinet(cabinet: string): void {
    this._relateThinqService.getClassFields(cabinet).subscribe();
  }

  onSearchRecord(searchForm: any): void {
    this._relateThinqService.getRelateSearch(
      searchForm.cabinet,
      searchForm.searchField,
      searchForm.searchQuery
    ).subscribe();
  }

  updateRelation(params: any): void {
    console.log(params);
    this._relateThinqService.updateRelationship(params).subscribe();
  }

  deleteRelation(params: any): void {
    console.log(params);
    this._relateThinqService.deleteRelationship(params).subscribe();
  }
}
