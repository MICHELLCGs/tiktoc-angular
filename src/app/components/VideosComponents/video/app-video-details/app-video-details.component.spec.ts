import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVideoDetailsComponent } from './app-video-details.component';

describe('AppVideoDetailsComponent', () => {
  let component: AppVideoDetailsComponent;
  let fixture: ComponentFixture<AppVideoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppVideoDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppVideoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
