import { Component,Input } from '@angular/core';
//import { AuthService } from './auth.service'; // Importa tu servicio de autenticación

@Component({
  selector: 'app-prompt',
  standalone: true,
  imports: [],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.css'
})
export class PromptComponent {
  @Input() promptText: string = ''; // Variable para el texto personalizado
  /*constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    if (this.authService.isLoggedIn()) { // Verifica si el usuario está logueado
      this.promptText = '¡Estás logueado! Bienvenido de nuevo.';
    } else {
      this.promptText = 'Por favor, inicia sesión para continuar.';
    }
  }*/
}
