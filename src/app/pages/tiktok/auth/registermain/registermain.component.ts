import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from '../../../../components/AuthenticationComponents/background/background.component';
import { ButtonComponent } from '../../../../components/AuthenticationComponents/button/button.component';
import { InputComponent } from '../../../../components/AuthenticationComponents/input/input.component';
import { GoogleButtonComponent } from '../../../../components/AuthenticationComponents/google-button/google-button.component';
import { LogoComponent } from '../../../../components/AuthenticationComponents/logo/logo.component';
import { ValidatorsService } from '../../../../services/validators.service';
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
  dobDay: number | null = null;
  dobMonth: number | null = null;
  dobYear: number | null = null;

  emailTouched: boolean = false;
  passwordTouched: boolean = false;
  phoneTouched: boolean = false;
  nameTouched: boolean = false;

  isDobValid: boolean = true;

  constructor(private router: Router, private validators: ValidatorsService) {}

  isEmailValid(): boolean {
    return this.validators.isEmailValid(this.email);
  }

  isPasswordValid(): boolean {
    return this.validators.isPasswordValid(this.password);
  }

  isPhoneValid(): boolean {
    return this.validators.isPhoneValid(this.phone);
  }

  isNameValid(): boolean {
    return this.validators.isNameValid(this.name);
  }

  isDateOfBirthValid(): boolean {
    return this.validators.isDateOfBirthValid(this.dobDay, this.dobMonth, this.dobYear);
  }

  updateDateOfBirth(day: number | null, month: number | null, year: number | null): void {
    this.dobDay = day;
    this.dobMonth = month;
    this.dobYear = year;
    this.isDobValid = this.isDateOfBirthValid();
  }

  isFormValid(): boolean {
    return (
      this.isEmailValid() &&
      this.isPasswordValid() &&
      this.isPhoneValid() &&
      this.isNameValid() &&
      this.isDateOfBirthValid()
    );
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.isFormValid()) {
      console.log('Registro exitoso');
      this.router.navigate(['/validacion']);
    } else {
      alert('Por favor, revisa los campos del formulario.');
    }
  }

  onGoogleLogin(): void {
    console.log('Registro con Google');
  }
}









