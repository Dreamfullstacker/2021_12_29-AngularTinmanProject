import { TestBed } from '@angular/core/testing';

import { CreateThinqResolver } from './create-thinq.resolver';

describe('CreateDataResolver', () => {
  let resolver: CreateThinqResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CreateThinqResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
