import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router para la navegación
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from '../../../../components/AuthenticationComponents/background/background.component';
import { ButtonComponent } from '../../../../components/AuthenticationComponents/button/button.component';
import { InputComponent } from '../../../../components/AuthenticationComponents/input/input.component';
import { GoogleButtonComponent } from '../../../../components/AuthenticationComponents/google-button/google-button.component';
import { LogoComponent } from '../../../../components/AuthenticationComponents/logo/logo.component';


@Component({
  selector: 'app-validacion',
  standalone: true,
  imports: [LogoComponent, FormsModule, CommonModule, BackgroundComponent, ButtonComponent, InputComponent, GoogleButtonComponent], // Manually add imports
  templateUrl: './validacion.component.html',
  styleUrl: './validacion.component.css'
})
export class ValidacionComponent {
  verificationCode: string = '';
  errorMessage: string = '';
  verificationTouched: boolean = false; // Estado para saber si el campo fue tocado

  // Inyectar el Router en el constructor
  constructor(private router: Router) {}
  
// Validar el input en tiempo real para que solo acepte números
validateInput(event: Event) {
  const inputElement = event.target as HTMLInputElement;
  const sanitizedValue = inputElement.value.replace(/[^0-9]/g, ''); // Elimina todo excepto números
  this.verificationCode = sanitizedValue;
}

// Método que se llama cuando el valor del input cambia
onInputChange() {
  this.verificationTouched = true; // Marcar como tocado cuando el usuario empiece a escribir
  this.errorMessage = ''; // Limpiar el mensaje de error al cambiar el valor
}

// Método para verificar si el formulario es válido
isFormValid(): boolean {
  return /^\d{6}$/.test(this.verificationCode);
}
// Método que se llama cuando se envía el formulario
onSubmit() {
  if (this.isFormValid()) {
    if (this.verificationCode === '123456') {
      alert('Código verificado');
      this.errorMessage = ''; // Limpia el mensaje de error
      // Redirigir al feed si la verificación es correcta
      this.router.navigate(['/feed']);
    } else {
      alert('Código incorrecto')
      this.errorMessage = 'Código de verificación incorrecto.';
    }
  } else {
    this.errorMessage = 'El código debe ser numérico y de 6 dígitos.';
  }
}



// Método para reenviar el código de validación
onResendCode() {
  alert('El código ha sido reenviado');
}
}