import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTitleImageComponent } from './movie-title-image.component';

describe('MovieTitleImageComponent', () => {
  let component: MovieTitleImageComponent;
  let fixture: ComponentFixture<MovieTitleImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieTitleImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieTitleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
