import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-button.component.html',
  styleUrl: './header-button.component.css'
})
export class HeaderButtonComponent {
  iconSrc: string = 'assets/user.svg';
  isAuthenticated: boolean = false; // Simulamos que el usuario no está autenticado
  userName: string = 'Juan Pérez'; // Nombre del usuario
  profilePicture: string = 'assets/Google.png'; // URL de la foto de perfil

  constructor(private router: Router) {}

  // Método para simular la navegación a la página de inicio de sesión
  navigate() {
    this.router.navigate(['/login']);
  }

  // Método que se llama cuando falla la carga de la imagen
  onImageError() {
    this.profilePicture = this.iconSrc; // Cambia a 'user.svg' si falla la carga
  }

}
