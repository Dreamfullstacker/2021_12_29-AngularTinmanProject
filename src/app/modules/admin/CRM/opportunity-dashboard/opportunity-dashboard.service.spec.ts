import { TestBed } from '@angular/core/testing';

import { OpportunityDashboardService } from './opportunity-dashboard.service';

describe('OpportunityDashboardService', () => {
  let service: OpportunityDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpportunityDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
