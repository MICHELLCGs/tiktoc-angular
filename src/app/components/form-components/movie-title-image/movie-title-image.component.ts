import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-movie-title-image',
  standalone: true,
  imports: [],
  templateUrl: './movie-title-image.component.html',
  styleUrl: './movie-title-image.component.css'
})
export class MovieTitleImageComponent {
  @Input() movieTitle: string = '';  
  @Input() movieImage: string = '';  
}
