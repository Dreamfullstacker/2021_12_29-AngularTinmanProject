import { Route } from '@angular/router';
import { PMKanbanBoardComponent } from './kanban-board.component';
import { PMKanbanBoardResolver } from './kanban-board.resolver';

export const pmKanbanRoutes: Route[] = [
  {
    path     : '',
    component: PMKanbanBoardComponent,
    resolve  : {
      data: PMKanbanBoardResolver
    }
  }
];
