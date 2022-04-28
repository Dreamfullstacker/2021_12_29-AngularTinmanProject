import { TestBed } from '@angular/core/testing';

import { AdminViewResolver } from './admin-view.resolver';

describe('AdminViewResolver', () => {
  let resolver: AdminViewResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AdminViewResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
