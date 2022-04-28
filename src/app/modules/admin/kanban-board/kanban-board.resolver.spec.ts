import { TestBed } from '@angular/core/testing';

import { KanbanBoardResolver } from './kanban-board.resolver';

describe('KanbanBoardResolver', () => {
  let resolver: KanbanBoardResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(KanbanBoardResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
