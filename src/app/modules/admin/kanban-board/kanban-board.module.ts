import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { KanbanBoardComponent } from './kanban-board.component';
import { trelloRoutes } from './kanban-board.routing';
import { KanbanCardComponent } from './kanban-card/kanban-card.component';
import { KanbanSearchComponent } from './kanban-search/kanban-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import { ThinqFormFieldModule } from '../thinq/thinq-form-field/thinq-form-field.module';



@NgModule({
  declarations: [
    KanbanBoardComponent,
    KanbanCardComponent,
    KanbanSearchComponent
  ],
  imports: [
    RouterModule.forChild(trelloRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    ThinqFormFieldModule
  ]
})
export class KanbanBoardModule { }
