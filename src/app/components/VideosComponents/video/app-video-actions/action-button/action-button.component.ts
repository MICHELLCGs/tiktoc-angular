import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.css'
})
export class ActionButtonComponent {
  @Input() icon: string = '';        // Ruta del ícono vacío (ej: Heart.svg)
  @Input() filledIcon: string = '';  // Ruta del ícono lleno (ej: HeartFill.svg)
  @Input() label: string = '';       // Etiqueta (como "Me gusta", "Comentarios", etc.)
  @Input() count: number = 0;        // Contador (likes, comments, etc.)
  @Input() isFilled: boolean = false;  // Estado de si el ícono está lleno o vacío

  @Output() actionClicked = new EventEmitter<void>(); // Evento cuando se hace clic

  handleClick() {
    this.actionClicked.emit(); // Emitir evento cuando el ícono es clickeado
  }
}
