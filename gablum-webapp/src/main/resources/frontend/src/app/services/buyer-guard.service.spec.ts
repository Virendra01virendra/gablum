import { TestBed } from '@angular/core/testing';

import { BuyerGuardService } from './buyer-guard.service';

describe('BuyerGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyerGuardService = TestBed.get(BuyerGuardService);
    expect(service).toBeTruthy();
  });
});
