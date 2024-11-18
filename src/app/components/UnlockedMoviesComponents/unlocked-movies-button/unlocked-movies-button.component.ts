import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-unlocked-movies-button',
  standalone: true,
  imports: [],
  templateUrl: './unlocked-movies-button.component.html',
  styleUrl: './unlocked-movies-button.component.css'
})
export class UnlockedMoviesButtonComponent {
  @Output() movieClicked: EventEmitter<void> = new EventEmitter();

  onClick(): void {
    this.movieClicked.emit();
  }
}
