import { TestBed } from '@angular/core/testing';

import { RelateThinqService } from './relate-thinq.service';

describe('RelateThinqService', () => {
  let service: RelateThinqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelateThinqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
