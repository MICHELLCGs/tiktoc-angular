import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCodeSelectorComponent } from './country-code-selector.component';

describe('CountryCodeSelectorComponent', () => {
  let component: CountryCodeSelectorComponent;
  let fixture: ComponentFixture<CountryCodeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryCodeSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryCodeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
