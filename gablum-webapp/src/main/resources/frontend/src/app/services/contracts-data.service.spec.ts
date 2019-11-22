import { TestBed } from '@angular/core/testing';

import { ContractsDataService } from './contracts-data.service';

describe('ContractsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContractsDataService = TestBed.get(ContractsDataService);
    expect(service).toBeTruthy();
  });
});
