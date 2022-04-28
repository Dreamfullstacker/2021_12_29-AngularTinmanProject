import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMKanbanBoardComponent } from './kanban-board.component';

describe('PMKanbanBoardComponent', () => {
  let component: PMKanbanBoardComponent;
  let fixture: ComponentFixture<PMKanbanBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMKanbanBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PMKanbanBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
