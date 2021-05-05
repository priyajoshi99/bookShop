import { TestBed } from '@angular/core/testing';

import { AllbooksService } from './allbooks.service';

describe('AllbooksService', () => {
  let service: AllbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
