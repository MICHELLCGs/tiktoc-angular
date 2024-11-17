import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescriptionTextComponent } from './description-text.component';

describe('DescriptionTextComponent', () => {
  let component: DescriptionTextComponent;
  let fixture: ComponentFixture<DescriptionTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescriptionTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DescriptionTextComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render description', () => {
    component.description = 'Test description';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.description').textContent).toContain('Test description');
  });
});
