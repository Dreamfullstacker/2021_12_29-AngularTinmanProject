import { TestBed } from '@angular/core/testing';

import { PMDashboardResolver } from './pm-dashboard.resolver';

describe('PMDashboardResolver', () => {
  let resolver: PMDashboardResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PMDashboardResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
