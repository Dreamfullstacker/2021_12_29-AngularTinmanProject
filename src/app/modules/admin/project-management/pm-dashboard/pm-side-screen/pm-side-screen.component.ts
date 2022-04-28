import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { groupBy } from 'lodash-es';
import { PMCountTaskInfo, PMTaskType } from '../pm-dashboard.type';

@Component({
  selector: 'pm-side-screen',
  templateUrl: './pm-side-screen.component.html',
  styleUrls: ['./pm-side-screen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PMSideScreenComponent implements OnInit {

  @Input() countTaskInfo: PMCountTaskInfo;
  @Input() selectedStatus: string;
  @Output() closeScreen: EventEmitter<boolean> = new EventEmitter();
  @Output() selectCard: EventEmitter<any> = new EventEmitter();
  totalCountByType: Record<string, PMTaskType[]> = {};
  selectedCard: any = null;
  constructor() { }

  ngOnInit(): void {
    this.totalCountByType = groupBy(this.countTaskInfo.taskType, 'Status');
  }

  close(): void {
    this.closeScreen.emit(true);
  }

  onTaskCardClick(status: string, type: string): void {
    if(this.isCardSelected(status, type)) {
      this.selectedCard = null;
    } else {
      this.selectedCard = {
        status: status,
        type: type
      };
    }
    this.selectCard.emit(this.selectedCard);
  }

  isCardSelected(status: string, type: string): boolean {
    return (status === this.selectedCard?.status && type === this.selectedCard?.type);
  }
}
