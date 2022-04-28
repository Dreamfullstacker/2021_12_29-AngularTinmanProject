import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { cloneDeep, groupBy } from 'lodash';
import { of, Subject } from 'rxjs';
import { debounceTime, map, switchMap, takeUntil } from 'rxjs/operators';
import { CreateThinqService } from './create-thinq.service';

@Component({
  selector: 'app-create-thinq',
  templateUrl: './create-thinq.component.html',
  styleUrls: ['./create-thinq.component.scss']
})
export class CreateThinqComponent implements OnInit, OnDestroy {

  cabinets: any[];
  cabinetList: any;
  displayCabinets: any;
  isLoading: boolean;
  searchInputControl: FormControl = new FormControl();
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _createService: CreateThinqService,
    private _router: Router
  ) { }

  /**
   * Setter for bar search input
   *
   * @param value
   */
  @ViewChild('searchInput')
  set searchInput(value: ElementRef)
  {
    // If the value exists, it means that the search input
    // is now in the DOM and we can focus on the input..
    if ( value )
    {
      // Give Angular time to complete the change detection cycle
      setTimeout(() => {

        // Focus to the input element
        value.nativeElement.focus();
      });
    }
  }

  ngOnInit(): void {
    this._createService.cabinets$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((cabinets) => {
      // Store the data
      this.cabinets = cabinets;
      this.cabinetList = groupBy(this.cabinets, 'ClassGroup');
      this.displayCabinets = cloneDeep(this.cabinetList);
    });
    this._createService.isLoading$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
    this.searchInputControl.valueChanges
    .pipe(
        debounceTime(300),
        switchMap((query) => {
            this.isLoading = true;
            for (const key in this.cabinetList) {
              if (Object.prototype.hasOwnProperty.call(this.cabinetList, key)) {
                let element = this.cabinetList[key];
                element = element.filter((el) => {
                  const str = el.ClassDisplayName.toLowerCase();
                  return str.includes(query.toLowerCase());
                });
                this.displayCabinets[key] = element;
              }
            }
            return of(true);
        }),
        map(() => {
            this.isLoading = false;
        })
    ).subscribe();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
  createThinq(classId: number): void {
    this._createService.createThinq(classId).subscribe(
      (res) => {
        console.log(res);
        const appDataId = Number(res);
        this._router.navigate(['/admin/thinq/' + appDataId]);
      }
    );
  }
}
