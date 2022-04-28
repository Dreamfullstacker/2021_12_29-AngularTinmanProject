import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pm-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PMKanbanCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
