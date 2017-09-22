import { TestBed, inject } from '@angular/core/testing';

import { DbConfigService } from './db-config.service';

describe('DbConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbConfigService]
    });
  });

  it('should ...', inject([DbConfigService], (service: DbConfigService) => {
    expect(service).toBeTruthy();
  }));
});
