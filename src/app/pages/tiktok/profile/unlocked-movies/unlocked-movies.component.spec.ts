import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockedMoviesComponent } from './unlocked-movies.component';

describe('UnlockedMoviesComponent', () => {
  let component: UnlockedMoviesComponent;
  let fixture: ComponentFixture<UnlockedMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockedMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
