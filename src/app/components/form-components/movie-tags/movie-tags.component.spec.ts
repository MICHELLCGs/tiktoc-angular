import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTagsComponent } from './movie-tags.component';

describe('MovieTagsComponent', () => {
  let component: MovieTagsComponent;
  let fixture: ComponentFixture<MovieTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieTagsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
