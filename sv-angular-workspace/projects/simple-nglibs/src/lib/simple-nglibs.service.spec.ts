import { TestBed } from '@angular/core/testing';

import { SimpleNglibsService } from './simple-nglibs.service';

describe('SimpleNglibsService', () => {
  let service: SimpleNglibsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleNglibsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
