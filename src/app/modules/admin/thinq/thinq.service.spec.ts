import { TestBed } from '@angular/core/testing';

import { ThinqService } from './thinq.service';

describe('ThinqService', () => {
    let service: ThinqService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ThinqService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
