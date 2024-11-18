import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-unlocked-movie-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unlocked-movie-item.component.html',
  styleUrl: './unlocked-movie-item.component.css'
})
export class UnlockedMovieItemComponent {
  @Input() movie: any;
  @Output() movieClicked: EventEmitter<any> = new EventEmitter();

  onMovieClick(): void {
    this.movieClicked.emit(this.movie); // Emite la película seleccionada
  }
}
