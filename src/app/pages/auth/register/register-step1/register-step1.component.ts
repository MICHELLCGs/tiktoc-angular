import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-step1',
  templateUrl: './register-step1.component.html',
  styleUrls: ['./register-step1.component.css'],
})
export class RegisterStep1Component {
  constructor(private router: Router) {}

  // Método para manejar la navegación al paso 2
  goToNextStep() {
    this.router.navigate(['/register-step2']);
  }

  // Método para manejar la navegación a la pantalla de login
  goToLogin() {
    this.router.navigate(['/login']); // Por ahora redirige a /login
  }

  // Método para manejar el botón "Atrás" (si lo necesitas)
  goBack() {
    console.log('Botón de "Atrás" presionado');
    // Puedes implementar lógica adicional aquí si es necesario
  }
}



