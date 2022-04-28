import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KanbanCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
