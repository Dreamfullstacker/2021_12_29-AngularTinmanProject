import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { PMCountTaskInfo } from '../pm-dashboard.type';

@Component({
  selector: 'pm-countcard-container',
  templateUrl: './pm-countcard-container.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PMCountcardContainerComponent implements OnChanges {

  @Input() countTaskInfo: PMCountTaskInfo;
  @Output() selectCard: EventEmitter<string> = new EventEmitter();
  totalCountByStatus: Record<string, number> = {};
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes?.countTaskInfo?.currentValue) {
      this.initCountCards(changes.countTaskInfo.currentValue);
    }
  }

  initCountCards(taskInfo: PMCountTaskInfo): void {
    this.totalCountByStatus = {};
    for (const taskType of taskInfo.taskType) {
      const status = taskType.Status;
      if (!Object.prototype.hasOwnProperty.call(this.totalCountByStatus, status)) {
        this.totalCountByStatus[status] = 0;
      }
      this.totalCountByStatus[status] += taskType.count;
    }
  }

  onTaskCardClick(status: string): void {
    this.selectCard.emit(status);
  }
}
