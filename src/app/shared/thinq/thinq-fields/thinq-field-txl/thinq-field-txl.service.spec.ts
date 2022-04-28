import { TestBed } from '@angular/core/testing';

import { ThinqFieldTxlService } from './thinq-field-txl.service';

describe('ThinqFieldTxlService', () => {
  let service: ThinqFieldTxlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThinqFieldTxlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
