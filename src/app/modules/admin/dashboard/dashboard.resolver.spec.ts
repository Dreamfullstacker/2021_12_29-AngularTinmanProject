import { TestBed } from '@angular/core/testing';

import { DashboardResolver } from './dashboard.resolver';

describe('DashboardResolver', () => {
  let resolver: DashboardResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DashboardResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
