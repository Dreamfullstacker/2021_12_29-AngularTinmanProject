import { TestBed } from '@angular/core/testing';

import { PMKanbanBoardResolver } from './kanban-board.resolver';

describe('PMKanbanBoardResolver', () => {
  let resolver: PMKanbanBoardResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PMKanbanBoardResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
