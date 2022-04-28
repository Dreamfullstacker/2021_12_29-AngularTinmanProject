import { Route } from '@angular/router';
import { KanbanBoardComponent } from './kanban-board.component';
import { KanbanBoardResolver } from './kanban-board.resolver';

export const trelloRoutes: Route[] = [
  {
    path     : '',
    component: KanbanBoardComponent,
    resolve  : {
      data: KanbanBoardResolver
    }
  }
];
