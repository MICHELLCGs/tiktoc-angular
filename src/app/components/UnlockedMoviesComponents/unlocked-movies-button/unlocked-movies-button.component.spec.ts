import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockedMoviesButtonComponent } from './unlocked-movies-button.component';

describe('UnlockedMoviesButtonComponent', () => {
  let component: UnlockedMoviesButtonComponent;
  let fixture: ComponentFixture<UnlockedMoviesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockedMoviesButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockedMoviesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
