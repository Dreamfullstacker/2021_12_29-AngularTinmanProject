import { TestBed } from '@angular/core/testing';

import { PMKanbanBoardService } from './kanban-board.service';

describe('PMKanbanBoardService', () => {
  let service: PMKanbanBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PMKanbanBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
