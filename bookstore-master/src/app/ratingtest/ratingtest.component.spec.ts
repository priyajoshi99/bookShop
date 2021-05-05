import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingtestComponent } from './ratingtest.component';

describe('RatingtestComponent', () => {
  let component: RatingtestComponent;
  let fixture: ComponentFixture<RatingtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
