import { TestBed } from '@angular/core/testing';

import { ThinqResolver } from './thinq.resolver';

describe('ThinqResolver', () => {
  let resolver: ThinqResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ThinqResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
