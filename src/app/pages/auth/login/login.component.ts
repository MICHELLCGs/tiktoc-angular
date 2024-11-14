import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Añadir FormsModule aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  phone: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.email && this.password && this.phone) {
      // Aquí iría la lógica de autenticación
      console.log('Inicio de sesión exitoso');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Por favor, completa todos los campos');
    }
  }

  onGoogleLogin(): void {
    // Aquí iría la lógica para autenticarse con Google
    console.log('Inicio de sesión con Google');
  }
}
