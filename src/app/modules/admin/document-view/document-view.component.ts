import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ThinqResponse } from 'app/core/thinq/thinq.type';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThinqService } from '../thinq/thinq.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DocumentViewComponent implements OnInit, OnDestroy {

  data: ThinqResponse;
  fileName: string;
  fileURL: string;
  // private fileUploadURL: string = environment.fileUploadURL;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _thinqService: ThinqService
  ) { }

  ngOnInit(): void {
    // Get the data
    this._thinqService.data$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((data) => {
      // Store the data
      this.data = data;
      this.fileName = data.Fields.DmsFileName?.Value;
      if (this.fileName) {
        // this.fileURL = this.fileUploadURL + this.fileName;
        // this.fileURL = 'https://docs.google.com/document/d/1i-LCMgWPGm2aGAKfxB2WqFHYf-PXT8jsOWu3HOIkscE/edit?usp=sharing';
      }
    });
  }

  ngOnDestroy(): void
  {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
