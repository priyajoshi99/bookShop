import { TestBed } from '@angular/core/testing';

import { SignedusersService } from './signedusers.service';

describe('SignedusersService', () => {
  let service: SignedusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignedusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
