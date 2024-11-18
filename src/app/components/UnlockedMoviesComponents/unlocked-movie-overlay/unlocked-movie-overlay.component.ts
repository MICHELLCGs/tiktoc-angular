import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnlockedOverlayLogosComponent } from '../unlocked-overlay-logos/unlocked-overlay-logos.component'
@Component({
  selector: 'app-unlocked-movie-overlay',
  standalone: true,
  imports: [CommonModule, UnlockedOverlayLogosComponent],
  templateUrl: './unlocked-movie-overlay.component.html',
  styleUrl: './unlocked-movie-overlay.component.css'
})
export class UnlockedMovieOverlayComponent {
  @Input() movie: any = null; // Recibe la película seleccionada
  @Output() closeOverlay: EventEmitter<void> = new EventEmitter();
  
  isVisible: boolean = false;
  streamingServices = [
    { imagePath: 'assets/netflix-logo.png', text: 'Netflix' },
    { imagePath: 'assets/disney-plus-logo.png', text: 'Disney +' },
    { imagePath: 'assets/hbo-max-logo.png', text: 'HBO max' }
  ];
  
  hide(): void {
    this.closeOverlay.emit(); // Informa al componente padre
  }
  

  show() {
    this.isVisible = true;
  }

}
