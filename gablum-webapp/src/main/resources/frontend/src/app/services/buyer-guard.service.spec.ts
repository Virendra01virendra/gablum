import { TestBed } from '@angular/core/testing';

import { BuyerGuardService } from './buyer-guard.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BuyerGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: BuyerGuardService = TestBed.get(BuyerGuardService);
    expect(service).toBeTruthy();
  });
});
