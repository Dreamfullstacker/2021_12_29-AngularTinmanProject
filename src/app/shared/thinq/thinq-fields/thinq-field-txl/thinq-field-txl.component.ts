import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { concat, Observable, of, Subject } from 'rxjs';
import { ThinqFieldTxlService, SearchResult } from './thinq-field-txl.service';
import { catchError, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { ThinqFormField } from 'app/core/thinq/thinq.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thinq-field-txl',
  templateUrl: './thinq-field-txl.component.html',
  styleUrls: ['./thinq-field-txl.component.scss'],
  encapsulation  : ViewEncapsulation.None
})
export class ThinqFieldTxlComponent implements OnInit {
  @Input() control: FormControl;
  @Input() txlIdField: FormControl;
  @Input() arrField: ThinqFormField = {
    /* eslint-disable @typescript-eslint/naming-convention */
    Type: 'txa',
    DataType: 'txt',
    Label: '',
    Width: 50,
    Format: '',
    Align: '' ,
    //22/10/2018 NR added for fields to be logged
    Lookup: null,
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
  txlControl: FormControl;
  fieldResult$: Observable<SearchResult[]>;
  fieldLoading = false;
  fieldInput$ = new Subject<string>();
  constructor(
    private dataService: ThinqFieldTxlService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.loadResult();
    this.txlControl = new FormControl(this.control.value);
    this.txlControl.valueChanges
    .pipe(
      switchMap((res) =>{
        if(res) {
          this.txlIdField.setValue(res.id.toString());
          this.control.setValue(res.result);
        } else {
          this.txlIdField.setValue('');
          this.control.setValue('');
        }
        return of(res);
      })
    ).subscribe();
  }

  onOpenThinq(): void {
    if(this.txlIdField.value) {
      this._router.navigate(['/admin/thinq/' + this.txlIdField.value]);
    }
  }

  isThinq(): boolean {
    if(!this.txlIdField?.value) {
      return false;
    }
    const appDataId = Number(this.txlIdField.value);
    if(appDataId) {
      return true;
    }
    return false;
  }

  getLabel(item: any): string{
    if(item.result) {
      return item.result;
    }
    return item;
  }

  private loadResult(): void {
    this.fieldResult$ = concat(
      of([]), // default items
      this.fieldInput$.pipe(
        distinctUntilChanged(),
        tap(() => this.fieldLoading = true),
        switchMap(query => this.dataService.getResult(this.arrField.Lookup, query).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.fieldLoading = false)
        ))
      )
    );
  }

}
