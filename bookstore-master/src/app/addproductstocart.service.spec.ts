import { TestBed } from '@angular/core/testing';

import { AddproductstocartService } from './addproductstocart.service';

describe('AddproductstocartService', () => {
  let service: AddproductstocartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddproductstocartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
