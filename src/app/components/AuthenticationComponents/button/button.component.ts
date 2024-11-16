import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type: string = 'button'; // Tipo de botón (por defecto "button")
  @Input() btnClass: string = '';  // Clases adicionales para estilos
  @Input() disabled: boolean = false; // Desactivar el botón
  @Input() label: string = ''; // Etiqueta del botón
}
