import { TestBed } from '@angular/core/testing';

import { CreateThinqService } from './create-thinq.service';

describe('CreateDataService', () => {
  let service: CreateThinqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateThinqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
