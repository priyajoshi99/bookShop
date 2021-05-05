import { TestBed } from '@angular/core/testing';

import { NewreleasesService } from './newreleases.service';

describe('NewreleasesService', () => {
  let service: NewreleasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewreleasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
