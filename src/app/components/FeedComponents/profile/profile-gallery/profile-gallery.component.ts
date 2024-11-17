import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-profile-gallery',
  standalone: true,
  imports: [CommonModule], // Asegúrate de incluirlo aquí
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent {
  items: string[] = []; // Define los items si no estaban definidos
}


