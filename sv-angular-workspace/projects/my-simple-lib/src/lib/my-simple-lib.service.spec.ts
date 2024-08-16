import { TestBed } from '@angular/core/testing';

import { MySimpleLibService } from './my-simple-lib.service';

describe('MySimpleLibService', () => {
  let service: MySimpleLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySimpleLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
