import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  getMovieData() {
    return {
      movieTitle: 'Película Simulada',
      movieImage: 'assets/movie-image.png',
      description: 'qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem',
      tags: ['Acción', 'Suspenso', 'Drama', '2023']
    };
  }
}
