import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent {
  @Input() username: string = ''; // Recibe el nombre del usuario
  @Input() level: string = ''; // Recibe el nivel del usuario
  @Input() coins: number = 0; // Recibe el número de monedas
  @Input() surveysCompleted: number = 0; // Recibe el número de encuestas completadas
  @Input() avatarUrl: string = 'assets/default-avatar.jpg'; // URL para la foto de perfil
}


