import { TestBed } from '@angular/core/testing';

import { InterceptorService } from './interceptor.service';
import { HttpClientModule } from '@angular/common/http';

describe('InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: InterceptorService = TestBed.get(InterceptorService);
    expect(service).toBeTruthy();
  });
});
