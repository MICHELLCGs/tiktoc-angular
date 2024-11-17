import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-movie-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-tags.component.html',
  styleUrl: './movie-tags.component.css'
})
export class MovieTagsComponent {
  @Input() tags: string[] = [];
}
