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
  selector: 'app-login',
  standalone: true,
  imports: [LogoComponent, FormsModule, CommonModule, BackgroundComponent, ButtonComponent, InputComponent, GoogleButtonComponent], // Manually add imports
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  phone: string = '';
  countryCode: string = '+51';

  emailTouched: boolean = false;
  passwordTouched: boolean = false;
  phoneTouched: boolean = false;

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

  isFormValid(): boolean {
    return this.isEmailValid() && this.isPasswordValid() && this.isPhoneValid();
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      console.log('Inicio de sesión exitoso');
      this.router.navigate(['/validacion']);
    } else {
      alert('Por favor, completa todos los campos correctamente');
    }
  }

  onGoogleLogin(): void {
    console.log('Inicio de sesión con Google');
  }
}

