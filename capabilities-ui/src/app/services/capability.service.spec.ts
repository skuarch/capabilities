import { TestBed, inject } from '@angular/core/testing';

import { CapabilityService } from './capability.service';

describe('CapabilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CapabilityService]
    });
  });

  it('should ...', inject([CapabilityService], (service: CapabilityService) => {
    expect(service).toBeTruthy();
  }));
});
