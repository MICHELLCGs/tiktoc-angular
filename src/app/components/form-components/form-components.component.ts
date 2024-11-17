import { Component, OnInit  } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieTitleImageComponent } from './movie-title-image/movie-title-image.component';
import { MovieTagsComponent } from './movie-tags/movie-tags.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { MovieButtonComponent } from './movie-button/movie-button.component';


@Component({
  selector: 'app-form-components',
  standalone: true,
  imports: [MovieTitleImageComponent, MovieTagsComponent, MovieDescriptionComponent , MovieButtonComponent],
  templateUrl: './form-components.component.html',
  styleUrl: './form-components.component.css'
})
export class FormComponentsComponent implements OnInit {
  movieData: any;

  constructor(private movieService: MovieService) {}

  ngOnInit() {

    this.movieData = this.movieService.getMovieData();
  }
}
