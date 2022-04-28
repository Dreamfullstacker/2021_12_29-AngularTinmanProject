import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMKanbanCardComponent } from './kanban-card.component';

describe('PMKanbanCardComponent', () => {
  let component: PMKanbanCardComponent;
  let fixture: ComponentFixture<PMKanbanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMKanbanCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PMKanbanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
