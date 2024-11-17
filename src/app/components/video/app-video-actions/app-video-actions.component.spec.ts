import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVideoActionsComponent } from './app-video-actions.component';

describe('AppVideoActionsComponent', () => {
  let component: AppVideoActionsComponent;
  let fixture: ComponentFixture<AppVideoActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppVideoActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppVideoActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
