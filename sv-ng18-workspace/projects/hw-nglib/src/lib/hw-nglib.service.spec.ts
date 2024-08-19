import { TestBed } from '@angular/core/testing';

import { HwNglibService } from './hw-nglib.service';

describe('HwNglibService', () => {
  let service: HwNglibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HwNglibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
