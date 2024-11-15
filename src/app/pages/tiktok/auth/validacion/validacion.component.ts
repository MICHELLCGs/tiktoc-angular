import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-validacion',
  standalone: true,
  imports: [FormsModule, CommonModule],  
  templateUrl: './validacion.component.html',
  styleUrl: './validacion.component.css'
})
export class ValidacionComponent {
  verificationCode: string = '';
  errorMessage: string = '';

  // Método que se llama cuando se envía el formulario
  onSubmit() {
    if (this.verificationCode === '123456') {
      // Aquí validas el código. Solo es un ejemplo
      alert('Código verificado');

    } else {
      this.errorMessage = 'Código de verificación incorrecto';
    }
  }

    // Método para verificar si el formulario es válido
  isFormValid(): boolean {
    // Verifica que el código sea un número de 6 dígitos
    const codeIsValid = /^\d{6}$/.test(this.verificationCode); 
    return codeIsValid;  
  }
  // Método para reenviar el código de validación
  onResendCode() {
    alert('El código ha sido reenviado');
  }
  
}
