import { TestBed } from '@angular/core/testing';

import { PMDashboardService } from './pm-dashboard.service';

describe('PMDashboardService', () => {
  let service: PMDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PMDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
