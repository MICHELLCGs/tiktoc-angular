import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnlockLinkComponent } from './unlock-link.component';

describe('UnlockLinkComponent', () => {
  let component: UnlockLinkComponent;
  let fixture: ComponentFixture<UnlockLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnlockLinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnlockLinkComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit unlock event on button click', () => {
    spyOn(component.unlock, 'emit');
    component.onUnlockClick();
    expect(component.unlock.emit).toHaveBeenCalled();
  });
});
