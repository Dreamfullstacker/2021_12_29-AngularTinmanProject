import { TestBed } from '@angular/core/testing';

import { KanbanBoardService } from './kanban-board.service';

describe('KanbanBoardService', () => {
  let service: KanbanBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanbanBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
