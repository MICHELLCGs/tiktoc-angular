import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionPerComponentsComponent } from './configuracion-per-components.component';

describe('ConfiguracionPerComponentsComponent', () => {
  let component: ConfiguracionPerComponentsComponent;
  let fixture: ComponentFixture<ConfiguracionPerComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracionPerComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionPerComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
