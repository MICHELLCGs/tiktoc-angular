import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileVideoItemComponent } from './profile-video-item.component';

describe('ProfileVideoItemComponent', () => {
  let component: ProfileVideoItemComponent;
  let fixture: ComponentFixture<ProfileVideoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileVideoItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileVideoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
