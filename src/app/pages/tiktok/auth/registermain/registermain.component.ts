import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from '../../../../components/AuthenticationComponents/background/background.component';
import { ButtonComponent } from '../../../../components/AuthenticationComponents/button/button.component';
import { InputComponent } from '../../../../components/AuthenticationComponents/input/input.component';
import { GoogleButtonComponent } from '../../../../components/AuthenticationComponents/google-button/google-button.component';
import { LogoComponent } from '../../../../components/AuthenticationComponents/logo/logo.component';

@Component({
  selector: 'app-registermain',
  standalone: true,
  imports: [ LogoComponent, FormsModule, CommonModule, BackgroundComponent, ButtonComponent, InputComponent, GoogleButtonComponent], // Manually add imports
  templateUrl: './registermain.component.html',
  styleUrls: ['./registermain.component.css']
})
export class RegistermainComponent {
  email: string = '';
  password: string = '';
  phone: string = '';
  name: string = '';
  countryCode: string = '+51';
  dobDay: number | null = null;
  dobMonth: number | null = null;
  dobYear: number | null = null;
  // Flags to track if the fields have been touched
  emailTouched: boolean = false;
  passwordTouched: boolean = false;
  phoneTouched: boolean = false;
  nameTouched: boolean = false;
  isDobValid: boolean = true;

  constructor(private router: Router) {}


  
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

  // Validación del nombre
  isNameValid(): boolean {
    const namePattern = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/;  // Allows alphabet characters and spaces
    return this.name.trim() !== '' && namePattern.test(this.name);  // Checks if not empty and matches pattern
  }
  

  // Método para validar la fecha, con soporte para valores `null`
  isValidDate(day: number | null, month: number | null, year: number | null): boolean {
    if (day === null || month === null || year === null) return false;

    if (month < 1 || month > 12 || day < 1) return false;

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day > daysInMonth[month - 1]) return false;

    // Verificar año bisiesto para el mes de febrero
    if (month === 2 && year % 4 === 0) {
      if (year % 100 !== 0 || year % 400 === 0) {
        if (day > 29) return false;
      } else if (day > 28) return false;
    }

    const currentYear = new Date().getFullYear();
    return year >= 1900 && year <= currentYear;
  }

  
  // Verificar si el formulario es válido
  isFormValid(): boolean {
    return this.isEmailValid() && 
           this.isPasswordValid() && 
           this.isPhoneValid() && 
           this.isNameValid() && 
           this.isValidDate(this.dobDay, this.dobMonth, this.dobYear); // Validación de la fecha antes de habilitar el botón
  }

    // Actualizar los valores de la fecha de nacimiento
  updateDateOfBirth(day: number | null, month: number | null, year: number | null) {
    this.dobDay = day;
    this.dobMonth = month;
    this.dobYear = year;
    this.isDobValid = this.isValidDate(this.dobDay, this.dobMonth, this.dobYear);
  }

  onGoogleLogin(): void {
    console.log('Inicio de sesión con Google');
  }

  onSubmit(event: any) {
    event.preventDefault();  // Evitar el comportamiento por defecto del formulario
  
    const formData = new FormData(event.target);
  
    // Extraer los valores del formulario
    const email = formData.get('email');
    const password = formData.get('password');
    const name = formData.get('name');
    const gender = formData.get('gender');
    const phone = formData.get('phone');
    const dobDay = parseInt(formData.get('dobDay') as string, 10);
    const dobMonth = parseInt(formData.get('dobMonth') as string, 10);
    const dobYear = parseInt(formData.get('dobYear') as string, 10);
  
    // Validar la fecha
    if (!this.isValidDate(dobDay, dobMonth, dobYear)) {
      alert('La fecha ingresada no es válida. Verifica el día, mes o año.');
      return;
    }
  
    // Validar todos los campos
    if (this.isEmailValid() && this.isPasswordValid() && this.isPhoneValid() && this.isNameValid()) {
      // Si todo está bien, redirigir a la página de validación
      this.router.navigate(['/validacion']);
    } else {
      alert('Por favor, revisa los campos del formulario.');
    }
  }


  
}









