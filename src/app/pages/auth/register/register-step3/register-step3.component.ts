import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-step3',
  templateUrl: './register-step3.component.html',
  styleUrls: ['./register-step3.component.css'],
})
export class RegisterStep3Component {
  isFormValid = false;

  constructor(private router: Router) {}

  // Método para manejar cambios en los inputs
  onInputChange() {
    const phoneInput = (document.getElementById('phone') as HTMLInputElement).value;
    const emailInput = (document.getElementById('email') as HTMLInputElement).value;
    const nameInput = (document.getElementById('name') as HTMLInputElement).value;
    const passwordInput = (document.getElementById('password') as HTMLInputElement).value;

    // Validar que todos los campos estén llenos
    this.isFormValid = !!(phoneInput && emailInput && nameInput && passwordInput);
  }

  // Método para regresar al paso anterior
  goBack() {
    this.router.navigate(['/register-step2']);
  }

  // Método para ir al siguiente paso (o finalizar)
  goToNextStep() {
    if (this.isFormValid) {
      // Aquí puedes manejar el envío del formulario o redirigir
      console.log('Formulario enviado con éxito.');
    }
  }
}

