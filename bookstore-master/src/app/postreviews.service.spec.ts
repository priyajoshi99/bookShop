import { TestBed } from '@angular/core/testing';

import { PostreviewsService } from './postreviews.service';

describe('PostreviewsService', () => {
  let service: PostreviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostreviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
