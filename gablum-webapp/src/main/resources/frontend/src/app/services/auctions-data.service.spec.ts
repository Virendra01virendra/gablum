import { TestBed } from '@angular/core/testing';

import { AuctionsDataService } from './auctions-data.service';

describe('AuctionsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuctionsDataService = TestBed.get(AuctionsDataService);
    expect(service).toBeTruthy();
  });
});
