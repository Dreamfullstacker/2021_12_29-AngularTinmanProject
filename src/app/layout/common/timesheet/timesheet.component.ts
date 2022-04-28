import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TimesheetService } from 'app/modules/admin/timesheet/timesheet.service';

@Component({
  selector: 'timesheet',
  templateUrl: './timesheet.component.html'
})
export class TimesheetComponent implements OnInit {

  @Output() clickEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  trackingTime: string;
  trackingTask: string;
  constructor(
    private _timesheetService: TimesheetService,
  ) { }

  ngOnInit(): void {
    this._timesheetService.trackingTask$
      .subscribe((task) => {
        this.trackingTask = task;
      });
    this._timesheetService.trackingTime$
      .subscribe((timer) => {
        this.trackingTime = timer;
      });
  }

  onTimesheetClick(): void {
    this.clickEvent.emit(true);
  }
}
