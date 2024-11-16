import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  @Input() src!: string; // Propiedad obligatoria para la ruta del logo
  @Input() alt?: string; // Texto alternativo opcional
  @Input() customClass?: string; // Clases CSS adicionales opcionales
}
