import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockedMovieOverlayComponent } from './unlocked-movie-overlay.component';

describe('UnlockedMovieOverlayComponent', () => {
  let component: UnlockedMovieOverlayComponent;
  let fixture: ComponentFixture<UnlockedMovieOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockedMovieOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockedMovieOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
