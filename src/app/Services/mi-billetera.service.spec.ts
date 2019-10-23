import { TestBed } from '@angular/core/testing';

import { MiBilleteraService } from './mi-billetera.service';

describe('MiBilleteraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiBilleteraService = TestBed.get(MiBilleteraService);
    expect(service).toBeTruthy();
  });
});
