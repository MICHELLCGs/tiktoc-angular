import { Component, Input  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-button',
  standalone: true,
  imports: [],
  templateUrl: './movie-button.component.html',
  styleUrl: './movie-button.component.css'
})
export class MovieButtonComponent {
  @Input() route: string = ''; 
  @Input() buttonText: string = 'Preparado'; 

  constructor(private router: Router) {}

  navigate() {
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }
}
