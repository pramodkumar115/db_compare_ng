import { TestBed, inject } from '@angular/core/testing';

import { DbCompareService } from './db-compare.service';

describe('DbCompareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbCompareService]
    });
  });

  it('should ...', inject([DbCompareService], (service: DbCompareService) => {
    expect(service).toBeTruthy();
  }));
});
