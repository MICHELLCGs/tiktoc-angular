import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from '../../../../components/AuthenticationComponents/background/background.component';
import { ButtonComponent } from '../../../../components/AuthenticationComponents/button/button.component';
import { InputComponent } from '../../../../components/AuthenticationComponents/input/input.component';
import { GoogleButtonComponent } from '../../../../components/AuthenticationComponents/google-button/google-button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, BackgroundComponent, ButtonComponent, InputComponent, GoogleButtonComponent], // Manually add imports
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  phone: string = '';
  countryCode: string = '+51'; // Valor por defecto

  // Flags to track if the fields have been touched
  emailTouched: boolean = false;
  passwordTouched: boolean = false;
  phoneTouched: boolean = false;

  // Validación del correo
  isEmailValid(): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(this.email);
  }

  // Validación de la contraseña
  isPasswordValid(): boolean {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[-_])[A-Za-z\d-_]{8,14}$/;
    return passwordPattern.test(this.password);
  }

  // Validación del número de teléfono
  isPhoneValid(): boolean {
    const phonePattern = /^\d{9}$/;
    return phonePattern.test(this.phone);
  }

  // Verificar si el formulario es válido
  isFormValid(): boolean {
    return this.isEmailValid() && this.isPasswordValid() && this.isPhoneValid();
  }

  constructor(private router: Router) {}

  onSubmit(): void {
    // Solo redirigir si el formulario es válido
    if (this.isFormValid()) {
      console.log('Inicio de sesión exitoso');
      this.router.navigate(['/validacion']);  // Redirige a la página de validación
    } else {
      alert('Por favor, completa todos los campos correctamente');
    }
  }

  onGoogleLogin(): void {
    console.log('Inicio de sesión con Google');
  }
}

