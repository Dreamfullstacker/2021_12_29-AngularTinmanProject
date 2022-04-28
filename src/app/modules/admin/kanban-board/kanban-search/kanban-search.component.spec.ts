import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanSearchComponent } from './kanban-search.component';

describe('KanbanSearchComponent', () => {
  let component: KanbanSearchComponent;
  let fixture: ComponentFixture<KanbanSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
