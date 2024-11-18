import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockedOverlayLogosComponent } from './unlocked-overlay-logos.component';

describe('UnlockedOverlayLogosComponent', () => {
  let component: UnlockedOverlayLogosComponent;
  let fixture: ComponentFixture<UnlockedOverlayLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockedOverlayLogosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockedOverlayLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
