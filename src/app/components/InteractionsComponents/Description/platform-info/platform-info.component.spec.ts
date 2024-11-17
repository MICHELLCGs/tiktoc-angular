import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlatformInfoComponent } from './platform-info.component';

describe('PlatformInfoComponent', () => {
  let component: PlatformInfoComponent;
  let fixture: ComponentFixture<PlatformInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlatformInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlatformInfoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render platform', () => {
    component.platform = 'Netflix';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.platform-info').textContent).toContain('Netflix');
  });
});
