import { TestBed } from '@angular/core/testing';

import { PrintticketService } from './printticket.service';

describe('PrintticketService', () => {
  let service: PrintticketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintticketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
