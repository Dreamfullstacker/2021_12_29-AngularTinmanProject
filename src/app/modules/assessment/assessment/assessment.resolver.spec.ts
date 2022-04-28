import { TestBed } from '@angular/core/testing';

import { AssessmentResolver } from './assessment.resolver';

describe('AssessmentResolver', () => {
    let resolver: AssessmentResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(AssessmentResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
