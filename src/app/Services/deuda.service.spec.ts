import { TestBed } from '@angular/core/testing';

import { DeudaService } from './deuda.service';

describe('DeudaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeudaService = TestBed.get(DeudaService);
    expect(service).toBeTruthy();
  });
});
