import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformLinkComponent } from './platform-link.component';

describe('PlatformLinkComponent', () => {
  let component: PlatformLinkComponent;
  let fixture: ComponentFixture<PlatformLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
