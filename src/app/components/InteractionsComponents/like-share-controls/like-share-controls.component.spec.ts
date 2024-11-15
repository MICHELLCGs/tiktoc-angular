import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeShareControlsComponent } from './like-share-controls.component';

describe('LikeShareControlsComponent', () => {
  let component: LikeShareControlsComponent;
  let fixture: ComponentFixture<LikeShareControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeShareControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeShareControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
