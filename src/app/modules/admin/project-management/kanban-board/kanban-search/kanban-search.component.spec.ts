import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMKanbanSearchComponent } from './kanban-search.component';

describe('PMKanbanSearchComponent', () => {
  let component: PMKanbanSearchComponent;
  let fixture: ComponentFixture<PMKanbanSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMKanbanSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PMKanbanSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
