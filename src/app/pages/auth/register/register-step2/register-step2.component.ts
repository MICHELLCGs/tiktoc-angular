import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-step2',
  templateUrl: './register-step2.component.html',
  styleUrls: ['./register-step2.component.css'],
})
export class RegisterStep2Component {
  birthdate: string | null = null; // Variable para almacenar la fecha seleccionada

  constructor(private router: Router) {}

  // Método para manejar el cambio en el input de fecha
  onDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.birthdate = input.value; // Actualiza la variable birthdate con el valor del input
  }

  // Método para regresar al paso anterior
  goBack() {
    this.router.navigate(['/register-step1']);
  }

  // Método para ir al siguiente paso
  goToNextStep() {
    if (this.birthdate) {
      this.router.navigate(['/register-step3']);
    }
  }
}




