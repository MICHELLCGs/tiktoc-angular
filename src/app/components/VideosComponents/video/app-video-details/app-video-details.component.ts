import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-details',
  standalone: true,
  templateUrl: './app-video-details.component.html',
  styleUrls: ['./app-video-details.component.css']
})
export class VideoDetailsComponent {
  @Input() description: string = '';
  @Input() platform: string = '';
}
