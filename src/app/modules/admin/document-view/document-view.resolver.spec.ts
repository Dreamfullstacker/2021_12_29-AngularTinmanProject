import { TestBed } from '@angular/core/testing';

import { DocumentViewResolver } from './document-view.resolver';

describe('DocumentViewResolver', () => {
  let resolver: DocumentViewResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DocumentViewResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
