import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pm-task-card',
  templateUrl: './pm-task-card.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PMTaskCardComponent implements OnInit {

  @Input() status: string;
  @Input() type: string;
  @Input() count: number;
  @Input() selected: boolean;
  @Output() clickCard: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onClickCard(): void {
    this.clickCard.emit({
      status: this.status,
      type: this.type
    });
  }

  getTaskCardColor(status: string, type: string): string {
    if(type === 'Bug') {
      return 'red-400';
    } else if(status === 'Doing') {
      return 'teal-400';
    } else if(status === 'Agenda') {
      return 'gray-600';
    } else if(status === 'Nextaction') {
      return 'blue-400';
    } else if(status === 'QA') {
      return 'yellow-400';
    } else if(status === 'Concept') {
      return 'pink-400';
    } else if(status === 'Waitingfor') {
      return 'orange-400';
    } else if(status === 'Open') {
      return 'indigo-400';
    }
    return 'teal-400';
  }

  getTaskCardClass(status: string, type: string): string {
    let cardClass = 'border-' + this.getTaskCardColor(status, type) +
      ' hover:bg-' + this.getTaskCardColor(status, type);
    cardClass += this.selected ? ' bg-' + this.getTaskCardColor(status, type) + ' text-white ': ' bg-card ';
    return cardClass;
  }
}
