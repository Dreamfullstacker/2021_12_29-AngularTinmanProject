import { TestBed } from '@angular/core/testing';

import { OpportunityDashboardResolver } from './opportunity-dashboard.resolver';

describe('OpportunityDashboardResolver', () => {
  let resolver: OpportunityDashboardResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(OpportunityDashboardResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
