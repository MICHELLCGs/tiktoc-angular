import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnlockedMovieItemComponent } from '../../../../components/UnlockedMoviesComponents/unlocked-movie-item/unlocked-movie-item.component' 
import { UnlockedMovieOverlayComponent } from '../../../../components/UnlockedMoviesComponents/unlocked-movie-overlay/unlocked-movie-overlay.component';
import { UnlockedMoviesButtonComponent } from '../../../../components/UnlockedMoviesComponents/unlocked-movies-button/unlocked-movies-button.component';

@Component({
  selector: 'app-unlocked-movies',
  standalone: true,
  imports: [CommonModule, UnlockedMovieItemComponent, UnlockedMovieOverlayComponent, UnlockedMoviesButtonComponent],
  templateUrl: './unlocked-movies.component.html',
  styleUrl: './unlocked-movies.component.css'
})
export class UnlockedMoviesComponent {
  unlockedMovies: any[] = [];

  constructor() {
    // Initialize the unlockedMovies array with sample data
    this.unlockedMovies = [
      { title: 'Movie 1', description: 'Description 1', poster: 'assets/movie-image.png' },
      { title: 'Movie 2', description: 'Description 2', poster: 'assets/movie-image.png' },
      { title: 'Movie 3', description: 'Description 3', poster: 'assets/movie-image.png' },
      { title: 'Movie 4', description: 'Description 4', poster: 'assets/movie-image.png' }
    ];
  }

  isOverlayVisible: boolean = false;  // Controla la visibilidad del overlay
  selectedMovie: any = null;  // Película seleccionada (inicializada como null)

  // Método para mostrar el overlay cuando se hace clic en una película
  onMovieClicked(movie: any): void {
    this.selectedMovie = movie; // Asigna la película seleccionada
    this.isOverlayVisible = true; // Muestra el overlay
    document.body.classList.add('modal-open'); // Evita el desplazamiento del fondo
  }

  // Método para cerrar el overlay
  onCloseOverlay(): void {
    this.selectedMovie = null; // Limpia la película seleccionada
    this.isOverlayVisible = false; // Oculta el overlay
    document.body.classList.remove('modal-open'); // Restaura el desplazamiento del fondo
  }
  
}
