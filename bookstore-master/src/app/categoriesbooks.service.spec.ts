import { TestBed } from '@angular/core/testing';

import { CategoriesbooksService } from './categoriesbooks.service';

describe('CategoriesbooksService', () => {
  let service: CategoriesbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
