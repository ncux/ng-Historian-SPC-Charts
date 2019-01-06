import { TestBed, inject } from '@angular/core/testing';

import { QueryUrlBuilderService } from './query-url-builder.service';

describe('QueryUrlBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryUrlBuilderService]
    });
  });

  it('should be created', inject([QueryUrlBuilderService], (service: QueryUrlBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
