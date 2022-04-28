/* eslint-disable @typescript-eslint/naming-convention */
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { Calendar as FullCalendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import momentPlugin from '@fullcalendar/moment';
import rrulePlugin from '@fullcalendar/rrule';
import timeGridPlugin from '@fullcalendar/timegrid';
import * as moment from 'moment';
import { Observable, Subject, timer } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { TimesheetService } from './timesheet.service';
import { AddTaskComponent } from './dialogs/add-task/add-task.component';
import { AuthService } from 'app/core/auth/auth.service';
import { AddActivityComponent } from './dialogs/add-activity/add-activity.component';
import { SaveTimesheetComponent } from './dialogs/save-timesheet/save-timesheet.component';
import { KoneQTUtils } from 'app/core/koneqt.utils';
// import { Calendar, CalendarDrawerMode, CalendarEvent, CalendarEventEditMode, CalendarEventPanelMode, CalendarSettings } from 'app/modules/admin/apps/calendar/calendar.types';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation  : ViewEncapsulation.None
})
export class TimesheetComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('fullCalendar') private _fullCalendar: FullCalendarComponent;

  calendarPlugins: any[] = [dayGridPlugin, interactionPlugin, listPlugin, momentPlugin, rrulePlugin, timeGridPlugin];
  viewCalendar: 'timeGridWeek' | 'timeGridDay' | 'calendarView' = 'timeGridDay';
  view: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listYear' = 'timeGridWeek';

  // activityField = {Type: 'ddl', Label: '', Options: this.activityOption};
  viewTitle: string;
  weekDay: Date[];
  selectedDay: Date;
  isLoading: boolean;
  totalTasks: any[] = null;
  totalOpenTasks: any[] = null;
  totalTimesheets: any[];
  // PR -> Task -> Activity
  timesheets: any;

  // Tracking Task
  trackedTime: number = null;
  trackingTimesheetId: string = null;
  timeTracker: Observable<number>;
  trackerDestroy: Subject<any>;
  objectKeys = Object.keys;
  private _fullCalendarApi: FullCalendar;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _timesheetService: TimesheetService,
    private _authService: AuthService,
    private _kqUtils: KoneQTUtils,
    private _changeDetectorRef: ChangeDetectorRef,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    // Get the data
    this._timesheetService.tasks$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((tasks) => {
      // Store the data
      if(tasks !== null) {
        this.totalTasks = tasks??[];
        this.totalOpenTasks = this.totalTasks.filter(ts => ts.Status === 'Open');
        console.log(this.totalTasks);
        this.getTimesheetsInPeriod();
        // Mark for check
        this._changeDetectorRef.markForCheck();
      }
    });
    this._timesheetService.timesheets$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((response) => {
      if(response) {
        // Store the data
        this.totalTimesheets = response ?? [];
        // Get new timesheets from localstorage that are not saved database yet
        const newTimesheets = JSON.parse(localStorage.getItem('timesheets'))??{data: []};
        this.totalTimesheets.push(...newTimesheets.data);
        console.log(this.totalTimesheets);
        this.initTimesheets();
        console.log(this.timesheets);

        // Mark for check
        this._changeDetectorRef.markForCheck();
      }
    });
    this._timesheetService.isLoading$
    .pipe(
      delay(0),
      takeUntil(this._unsubscribeAll)
    ).subscribe((isLoading) => {
      // Store the data
      this.isLoading = isLoading;
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
  }

  /**
   * After view init
   */
  ngAfterViewInit(): void
  {
    // Get the full calendar API
    this._fullCalendarApi = this._fullCalendar.getApi();

    // Get the current view's title
    const currentDate = this._fullCalendarApi.getDate();
    this.viewTitle = moment(currentDate).format('dddd, D MMM');
    this.selectedDay = new Date(moment(currentDate).format('MM/D/yyyy'));

  }

  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
    this.trackerDestroy?.next();
    this.trackerDestroy?.complete();
  }

  initTimesheets(): void
  {
    const timesheetsOnDay = this.totalTimesheets.filter(timesheet =>
      timesheet.StartDate === this._kqUtils.convertToKoneqtDate(this.selectedDay));
    this.timesheets = {};
    for (const timesheet of timesheetsOnDay) {
      const projectId = timesheet.PRId;
      const activity = timesheet.Activity;
      const taskId = timesheet.TaskId;
      if(!Object.prototype.hasOwnProperty.call(this.timesheets, projectId)) {
        this.timesheets[projectId] = {};
      }
      if(!Object.prototype.hasOwnProperty.call(this.timesheets[projectId], taskId)) {
        const task = this.totalTasks.find(ts => Number(ts.AppDataId) === Number(taskId));
        if(!task) {
          return;
        }
        this.timesheets[projectId] = { ...this.timesheets[projectId], projectName: task.Project };
        this.timesheets[projectId][taskId] = {
          taskName: this._kqUtils.getFirstLine(task.Abstract),
          ownerId: task.OwnerId,
          ownerName: task.Owner,
          assignedId: task.AssignedTo,
          assignedName: task.AssignedToName,
          status: task.Status,
          activity: {}
        };
      }
      if(!Object.prototype.hasOwnProperty.call(this.timesheets[projectId][taskId]['activity'], activity)) {
        this.timesheets[projectId][taskId]['activity'][activity] = {
          timesheets: []
        };
      }
      this.timesheets[projectId][taskId]['activity'][activity].timesheets.push(timesheet);
    }
    const timeTracking = JSON.parse(localStorage.getItem('timer'));
    if( timeTracking ) {
      const projectId = Number(timeTracking.projectId);
      const taskId = Number(timeTracking.taskId);
      const activity = timeTracking.activity;
      const trackingTimesheet = {
        PRId: projectId,
        TaskId: taskId,
        Activity: activity,
        StartDate: this._kqUtils.convertToKoneqtDate(timeTracking.trackStartTime),
        TimeId: timeTracking.timeId,
        Time: timeTracking.trackedTime
      };
      // Check tracking timesheet on day
      if(this._kqUtils.convertToKoneqtDate(timeTracking.trackStartTime) ===
          this._kqUtils.convertToKoneqtDate(this.selectedDay)) {
        const timesheets = this.timesheets?.[projectId]?.[taskId]?.['activity']?.[activity]?.timesheets;
        // Set tracking timesheet ID
        this.trackingTimesheetId = timeTracking.timeId;
        // Set tracked time from localstorage - minutes
        this.trackedTime = timeTracking.trackedTime;
        this.trackedTime += (new Date().getTime() - new Date(timeTracking.trackStartTime).getTime()) / 1000 / 60;
        trackingTimesheet.Time = this.trackedTime / 60;
        timesheets.push(trackingTimesheet);
        this.totalTimesheets.push(trackingTimesheet);
        this.timeTracker = timer(1000, 1000);
        this._timesheetService._trackingTask.next(this.timesheets[projectId][taskId].taskName);
        this._timesheetService._trackingTime.next(
          this.displayDurationTime(this.trackedTime));
        this.trackerDestroy = new Subject<any>();
        this.timeTracker.pipe(takeUntil(this.trackerDestroy)).subscribe((val) => {
          if(val % 60 === 0 && val > 0) {
            this.trackedTime ++;
            trackingTimesheet.Time = this.trackedTime / 60;
            this._timesheetService._trackingTime.next(
              this.displayDurationTime(this.trackedTime));
            // Mark for check
            this._changeDetectorRef.markForCheck();
          }
        });
      }
    }
  }

  /**
   * Change the calendar view - calendar view dropdown
   *
   * @param view
   */
  changeView(view: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listYear'): void
  {
    // Store the view
    this.view = view;

    // If the FullCalendar API is available...
    if ( this._fullCalendarApi )
    {
      // Set the view
      this._fullCalendarApi.changeView(view);

      // Update the view title
      this.viewTitle = this._fullCalendarApi.view.title;
    }
  }

  /**
   * Change the calendar view - timesheet view button toggle
   *
   * @param view
   */
  changeTimesheetView(view: 'timeGridWeek' | 'timeGridDay' | 'calendarView'): void
  {
    this.viewCalendar = view;
    if (view !== 'calendarView') {
      this.view = 'timeGridWeek';
      // Set the view
      this._fullCalendarApi.changeView(this.view);

      // Update the view title   EEEE d\'th\' of MMMM y \'at\' H:M'
      const currentDate = this._fullCalendarApi.getDate();
      this.viewTitle = moment(currentDate).format('dddd, D MMM');
    } else {
      this.view = 'timeGridDay';
      // Set the view
      this._fullCalendarApi.changeView(this.view);

      // Update the view title
      this.viewTitle = this._fullCalendarApi.view.title;
    }
  }

  /**
   * Moves the calendar one stop back
   */
  previous(): void
  {
    // Go to previous stop
    if (this.viewCalendar === 'timeGridDay' && this.selectedDay.getDay() !== 1) {
      this.selectedDay.setDate(this.selectedDay.getDate() - 1);
      this.viewTitle = moment(this.selectedDay).format('dddd, D MMM');
      this.initTimesheets();
    } else {
      this.previousWeek();
    }
  }

  previousWeek(): void
  {
    this._fullCalendarApi.prev();

    // Update the view title
    const currentDate = this._fullCalendarApi.getDate();
    this.viewTitle = moment(currentDate).format('dddd, D MMM');

    // Set selected day
    this.selectedDay = currentDate;

    // Get timesheets in current week
    this.getTimesheetsInPeriod();
  }

  /**
   * Moves the calendar to the current date
   */
  today(): void
  {
    // Go to today
    this._fullCalendarApi.today();

    this.selectedDay = new Date(moment(this._fullCalendarApi.getDate()).format('MM/D/yyyy'));

    // Update the view title
    this.viewTitle = moment(this.selectedDay).format('dddd, D MMM');

    // Get timesheets in current week
    this.getTimesheetsInPeriod();
  }

  /**
   * Moves the calendar one stop forward
   */
  next(): void
  {
    // Go to next stop
    if (this.viewCalendar === 'timeGridDay' && this.selectedDay.getDay() !== 0) {

      this.selectedDay.setDate(this.selectedDay.getDate() + 1);
      this.viewTitle = moment(this.selectedDay).format('dddd, D MMM');
      this.initTimesheets();
    } else {
      this.nextWeek();
    }
  }

  nextWeek(): void
  {
    this._fullCalendarApi.next();

    // Update the view title
    const currentDate = this._fullCalendarApi.getDate();
    this.viewTitle = moment(currentDate).format('dddd, D MMM');

    // Set selected day
    this.selectedDay = currentDate;

    // Get timesheets in current week
    this.getTimesheetsInPeriod();
  }

  selectDay(date: Date): void {
    this.selectedDay = new Date(date);
    this.initTimesheets();
    this.viewTitle = moment(this.selectedDay).format('dddd, D MMM');
  }

  getTimesheetsInPeriod(): void {

    const start = this._fullCalendarApi.view.currentStart;
    const end = this._fullCalendarApi.view.currentEnd;
    this.weekDay = this.getWeekDays(start, end);
    // Get the view's current week start and end dates
    const viewStart = this._kqUtils.convertToKoneqtDate(start);
    const viewEnd = this._kqUtils.convertToKoneqtDate(end);
    // Get timesheets in current period
    this._timesheetService.getTimesheetsbyDate(viewStart, viewEnd).subscribe();
  }

  getGroupTimesheets(): any[] {
    const timesheets = [];
    for (const timesheet of this.totalTimesheets) {
      if(timesheets.findIndex(ts => ts.Project === timesheet.Project && ts.Activity === timesheet.Activity) === -1) {
        timesheets.push(timesheet);
      }
    }
    return timesheets;
  }

  getWeekDays(start: Date, end: Date): Date[] {
    const arr: Date[] = [];
    const dt = new Date(start);
    while (dt < end) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  }

  getDailyWorkTimeByTask(timesheet: any, day: Date): string {
    const d = this._kqUtils.convertToKoneqtDate(day);
    const workTime = this.totalTimesheets
      .filter(ts => ts.StartDate === d && ts.PRId === timesheet.PRId && ts.TaskId === timesheet.TaskId)
      .reduce((sum, time) => sum + time.Time * 60, 0);
    return this.displayDurationTime(workTime);
  }

  // Timesheet Day View functions
  getWorkTimeByDay(day: Date): string {
    const d = this._kqUtils.convertToKoneqtDate(day);
    const workTime = this.totalTimesheets
      ?.filter(ts => ts.StartDate === d)
      ?.reduce((sum, time) => sum + time.Time * 60, 0);
    return this.displayDurationTime(workTime);
  }

  getTotalWorkTimeByWeek(): string {
    const workTime = this.totalTimesheets?.reduce((sum, time) => sum + time.Time * 60, 0);
    return this.displayDurationTime(workTime);
  }

  // Timesheet Week View functions
  getWorkTimeByTimesheets(timesheets: any): string {
    const workTime = timesheets.reduce((sum, ts) => sum + ts.Time * 60, 0);
    return this.displayDurationTime(workTime);
  }

  getTimesheetsTime(projectId: number, taskId: number, activity: string, day: Date): number {
    let timesheets = this.timesheets?.[projectId]?.[taskId]?.['activity']?.[activity]?.timesheets;
    timesheets = timesheets.filter(ts => ts.StartDate === this._kqUtils.convertToKoneqtDate(day));
    if(timesheets?.length) {
      const workTime = timesheets.reduce((sum, ts) => sum + ts.Time * 60, 0);
      return workTime;
    }
    return 0;
  }

  getWeeklyWorkTimeByTask(timesheet: any): string {
    const timesheets = this.totalTimesheets.filter(ts =>
      ts.Title === timesheet.Title &&
      ts.Activity === timesheet.Activity);
    const workTime = timesheets.reduce((sum, ts) => sum + ts.Time * 60, 0);
    return this.displayDurationTime(workTime);
  }

  startTracking(projectId: number, taskId: number, activity: string): void {
    // Set localstorage timer
    if(this.trackingTimesheetId) {
      const trackingTimesheet = this.totalTimesheets.find(ts => ts.TimeId === this.trackingTimesheetId);
      // Stop current tracking and Save
      this.stopTracking(trackingTimesheet.PRId, trackingTimesheet.TaskId, trackingTimesheet.Activity, {
        projectId: projectId,
        taskId: taskId,
        activity: activity
      });
    } else {
      // create timesheet
      if(activity === 'open') {
        // Open the dialog
        const dialogRef = this._matDialog.open(AddActivityComponent);

        dialogRef.afterClosed().subscribe((newActivity) => {
          if(!newActivity) {
            return;
          }
          this.timesheets[projectId][taskId]['activity'][newActivity] = {
            ...this.timesheets[projectId][taskId]['activity']['open'],
            activity: newActivity,
          };
          delete this.timesheets[projectId][taskId]['activity']['open'];
          const newTimesheets = JSON.parse(localStorage.getItem('timesheets'));
          const timesheet = newTimesheets.data.find(ts =>
            ts.TimeId === this.newTimeId(taskId, 'open') &&
            ts.StartDate === this._kqUtils.convertToKoneqtDate(this.selectedDay)
          );
          timesheet.Activity = newActivity;
          timesheet.TimeId = this.newTimeId(taskId, newActivity);
          localStorage.setItem('timesheets', JSON.stringify(newTimesheets));
          this.startRecordTime(projectId, taskId, newActivity, true);
          this._changeDetectorRef.markForCheck();
        });
      } else {
        this.startRecordTime(projectId, taskId, activity);
      }
    }
  }

  startRecordTime(projectId: number, taskId: number, activity: string, isNew: boolean = false): void {
    const timesheets = this.timesheets[projectId][taskId]['activity'][activity].timesheets??[];
    let timesheet = timesheets[0];
    let task;
    if (isNew) {
      timesheet = {
        PRId: Number(projectId),
        TaskId: Number(taskId),
        Activity: activity,
        StartDate: this._kqUtils.convertToKoneqtDate(new Date()),
        TimeId: this.newTimeId(taskId, activity),
        Time: 0
      };
      task = this.totalTasks.find(ts => Number(ts.AppDataId) === Number(taskId));
    } else {
      timesheet = {
        ...timesheet,
        StartDate: this._kqUtils.convertToKoneqtDate(new Date()),
        TimeId: this.newTimeId(taskId, activity),
        Time: 0
      };
    }
    timesheets.push(timesheet);
    this.totalTimesheets.push(timesheet);
    this.trackingTimesheetId = timesheet.TimeId;
    this.trackedTime = timesheet.Time * 60;
    const timeTracker = {
      projectId: projectId,
      taskId: taskId,
      activity: activity,
      timeId: timesheet.TimeId,
      trackedTime: timesheet.Time * 60,
      trackStartTime: new Date().toString()
    };
    localStorage.setItem('timer', JSON.stringify(timeTracker));
    this._timesheetService._trackingTime.next('0:00');
    this._timesheetService._trackingTask.next(timesheet?.Task??task.Abstract);
    this.timeTracker = timer(1000, 1000);
    this.trackerDestroy = new Subject<any>();
    this.timeTracker.pipe(takeUntil(this.trackerDestroy)).subscribe((val) => {
      if(val % 60 === 0 && val > 0) {
        this.trackedTime ++;
        timesheet.Time = this.trackedTime / 60;
        this._timesheetService._trackingTime.next(
          this.displayDurationTime(this.trackedTime));
        // Mark for check
        this._changeDetectorRef.markForCheck();
      }
    });
  }

  stopTracking(projectId: number, taskId: number, activity: string, newTracking: any = null): void {
    // Open the description dialog
    const dialogRef = this._matDialog.open(SaveTimesheetComponent, {
    });

    dialogRef.afterClosed().subscribe((description) => {
      if(!description) {
        return;
      }
      // stop timer
      this.trackerDestroy.next();
      this.trackerDestroy.complete();
      // get
      const timesheets = this.timesheets[projectId][taskId]['activity'][activity].timesheets;
      const timesheet = timesheets.find(ts => ts.TimeId === this.newTimeId(taskId, activity));
      this._timesheetService.saveTimesheet(timesheet.TaskId, this.trackedTime, activity, description).subscribe((res) => {
        const timeId = Number(res);
        timesheet.TimeId = timeId;
        timesheet.Activity = activity;
        // Set tracking value
        this.trackedTime = null;
        this.trackingTimesheetId = null;
        // Remove timer from localstorage
        localStorage.removeItem('timer');
        // Remove timetrack from service (nav timer)
        this._timesheetService._trackingTask.next('');
        this._timesheetService._trackingTime.next('');
        // Remove timesheet from localstorage
        const localTimesheets = JSON.parse(localStorage.getItem('timesheets'));
        if(localTimesheets) {
          const newLocalTimesheet = localTimesheets?.data?.filter(ts =>
            !(ts.TimeId === this.newTimeId(taskId, activity) &&
            ts.StartDate === this._kqUtils.convertToKoneqtDate(this.selectedDay))
          );
          localStorage.setItem('timesheets', JSON.stringify({data: newLocalTimesheet}));
        }
        if(newTracking) {
          this.startTracking(newTracking.projectId, newTracking.taskId, newTracking.activity);
        }
        this._changeDetectorRef.markForCheck();
      });
    });
  }

  displayDurationTime(minutes: number = 0, format: string = 'H:mm'): string {
    return this._kqUtils.displayDurationTime(minutes, format);
  }

  displayTime(date: Date, format: string): string {
    return this._kqUtils.displayTime(date, format);
  }

  isTracking(projectId: number, taskId: number, activity: string): boolean {
    const tracking = JSON.parse(localStorage.getItem('timer'));
    if(!tracking) {
      return false;
    }
    return (this.trackingTimesheetId === this.newTimeId(taskId, activity) &&
      this._kqUtils.convertToKoneqtDate(this.selectedDay) === this._kqUtils.convertToKoneqtDate(tracking.trackStartTime)
    );
  }

  createTimesheet(): void {
    // Open the task dialog
    const dialogRef = this._matDialog.open(AddTaskComponent, {
      data: {
        openTasks: this.totalTasks
      }
    });

    dialogRef.afterClosed().subscribe((projectTask) => {
      if(!projectTask) {
        return;
      }
      const projectId = projectTask.project;
      const taskId = projectTask.task;
      const task = this.totalTasks.find(ts => ts.AppDataId === taskId);
      const newTimesheets = JSON.parse(localStorage.getItem('timesheets'))??{data: []};
      if(!this.timesheets?.[projectId]) {
        this.timesheets[projectId] = { projectName: task.Project };
      }
      if(!this.timesheets[projectId][taskId]) {
        this.timesheets[projectId][taskId] = {
          taskName: this._kqUtils.getFirstLine(task.Abstract),
          ownerId: task.OwnerId,
          ownerName: task.Owner,
          assignedId: task.AssignedToName,
          assignedName: task.AssignedToName,
          status: task.Status,
          activity: {}
        };
      } else if(this.timesheets[projectId][taskId]['activity']['open']) {
        return;
      }
      const timesheet = {
        PRId: Number(projectId),
        TaskId: Number(taskId),
        Activity: 'open',
        StartDate: this._kqUtils.convertToKoneqtDate(this.selectedDay),
        TimeId: 'newTime' + taskId + ':open',
        Time: 0
      };
      this.timesheets[projectId][taskId]['activity']['open'] = {
        workTime: 0,
        timesheets: [timesheet],
        activity: 'open'
      };
      newTimesheets.data.push(timesheet);
      localStorage.setItem('timesheets', JSON.stringify(newTimesheets));
      this.totalTimesheets.push(timesheet);
      this._changeDetectorRef.markForCheck();
    });
  }

  onEditTimesheet(event: HTMLInputElement, projectId: number, taskId: number, activity: string): void {
    const timesheets = this.timesheets[projectId][taskId]['activity'][activity].timesheets;
    const time = event.value;
    // #TODO
    const prevTime = this.getWorkTimeByTimesheets(timesheets);
    let oldTime = moment.duration(prevTime).asMinutes();
    const newTime = moment.duration(time).asMinutes();
    if(newTime > oldTime) {
      const lastTimesheet = timesheets[timesheets.length - 1];
      this._timesheetService.updateTimesheet(lastTimesheet.TimeId, lastTimesheet.Time * 60 + (newTime - oldTime)).subscribe((res) => {
        lastTimesheet.Time = res / 60;
      });
    } else if(newTime < oldTime) {
      let index = timesheets.length - 1;
      while(oldTime - timesheets[index].Time * 60 > newTime ) {
        oldTime -= timesheets[index].Time * 60;
        this._timesheetService.updateTimesheet(timesheets[index].TimeId, 0).subscribe(() => {
          timesheets[index].Time = 0;
        });
        index --;
      }
      this._timesheetService.updateTimesheet(timesheets[index].TimeId, timesheets[index].Time * 60 - (oldTime - newTime))
        .subscribe((res) => {
          timesheets[index].Time = res / 60;
        });
    }
  }

  onBlurEditTime(event: HTMLInputElement, projectId: number, taskId: number, activity: string): void {
    const time = this.getWorkTimeByTimesheets(this.timesheets[projectId][taskId]['activity'][activity].timesheets);
    event.value = time;
    // event.target.setValue(time);
  }

  isAssignedTask(userId: number): boolean {
    return this._authService.kq_UserId === userId;
  }

  newTimeId(taskId: number, activity: string): string {
    return 'newTime' + taskId + ':' + activity;
  }
}
