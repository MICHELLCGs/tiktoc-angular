import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockedMovieItemComponent } from './unlocked-movie-item.component';

describe('UnlockedMovieItemComponent', () => {
  let component: UnlockedMovieItemComponent;
  let fixture: ComponentFixture<UnlockedMovieItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockedMovieItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockedMovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
