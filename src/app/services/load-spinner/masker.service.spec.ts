import { TestBed, inject } from '@angular/core/testing';

import { MaskerService } from './masker.service';

describe('MaskerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaskerService]
    });
  });

  it('should ...', inject([MaskerService], (service: MaskerService) => {
    expect(service).toBeTruthy();
  }));
});
