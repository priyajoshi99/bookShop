import { TestBed } from '@angular/core/testing';

import { DeletebooksService } from './deletebooks.service';

describe('DeletebooksService', () => {
  let service: DeletebooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletebooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
