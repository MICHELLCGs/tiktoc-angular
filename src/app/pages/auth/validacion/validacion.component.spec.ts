import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ValidacionComponent } from './validacion.component';

describe('ValidacionComponent', () => {
  let component: ValidacionComponent;
  let fixture: ComponentFixture<ValidacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidacionComponent ],
      imports: [ FormsModule ] // Necesario para el uso de ngModel
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify code correctly', () => {
    component.verificationCode = '123456';
    component.onSubmit();
    expect(component.errorMessage).toBe('');
    // Verifica que el código haya sido correctamente verificado (en este caso se simula con '123456')
  });

  it('should show error for incorrect code', () => {
    component.verificationCode = 'wrongCode';
    component.onSubmit();
    expect(component.errorMessage).toBe('Código de verificación incorrecto');
  });

  it('should resend code', () => {
    spyOn(window, 'alert');
    component.onResendCode();
    expect(window.alert).toHaveBeenCalledWith('El código ha sido reenviado');
  });
});
