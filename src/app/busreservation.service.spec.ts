import { TestBed } from '@angular/core/testing';

import { BusreservationService } from './busreservation.service';

describe('BusreservationService', () => {
  let service: BusreservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusreservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
