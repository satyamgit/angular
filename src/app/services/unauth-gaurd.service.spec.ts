import { TestBed } from '@angular/core/testing';

import { UnauthGaurdService } from './unauth-gaurd.service';

describe('UnauthGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnauthGaurdService = TestBed.get(UnauthGaurdService);
    expect(service).toBeTruthy();
  });
});
