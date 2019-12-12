import { TestBed } from '@angular/core/testing';

import { BidDataService } from './bid-data.service';

describe('BidDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BidDataService = TestBed.get(BidDataService);
    expect(service).toBeTruthy();
  });
});
