import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { PMKanbanBoardComponent } from './kanban-board.component';
import { pmKanbanRoutes } from './kanban-board.routing';
import { PMKanbanCardComponent } from './kanban-card/kanban-card.component';
import { PMKanbanSearchComponent } from './kanban-search/kanban-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import { ThinqFormFieldModule } from 'app/modules/admin/thinq/thinq-form-field/thinq-form-field.module';



@NgModule({
  declarations: [
    PMKanbanBoardComponent,
    PMKanbanCardComponent,
    PMKanbanSearchComponent
  ],
  imports: [
    RouterModule.forChild(pmKanbanRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    ThinqFormFieldModule
  ]
})
export class PMKanbanBoardModule { }
