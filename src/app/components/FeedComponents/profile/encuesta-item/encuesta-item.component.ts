import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EncuestaItem {
  id: number;
  titulo: string;  // Cambié title a titulo
  descripcion: string;  // Cambié description a descripcion
  imagenUrl: string;  // Cambié imageUrl a imagenUrl
}

@Component({
  selector: 'app-encuesta-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './encuesta-item.component.html',
  styleUrl: './encuesta-item.component.css'
})
export class EncuestaItemComponent {
  @Input() encuesta: any; // Recibimos la encuesta
  @Input() encuestaActual: number = 0;  // Propiedad adicional si la necesitas

  ngOnInit() {
    console.log(this.encuesta); // Verifica si los datos están llegando
  }
}
