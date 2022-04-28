import { TestBed } from '@angular/core/testing';

import { RelateThinqResolver } from './relate-thinq.resolver';

describe('RelateThinqResolver', () => {
  let resolver: RelateThinqResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RelateThinqResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
