import { TestBed } from '@angular/core/testing';

import { CancleService } from './cancle.service';

describe('CancleService', () => {
  let service: CancleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
