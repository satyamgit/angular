import { TestBed } from '@angular/core/testing';

import { MyCookieService } from './my-cookie.service';

describe('MyCookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyCookieService = TestBed.get(MyCookieService);
    expect(service).toBeTruthy();
  });
});
