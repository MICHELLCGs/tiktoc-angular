import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common'; // Importar CommonModule para directivas básicas como *ngFor y *ngIf

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], // Agregar FormsModule y CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Cambié 'styleUrl' a 'styleUrls' para evitar errores
})
export class AppComponent {
  title = 'front-angular';
}
