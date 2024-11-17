import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-player',
  standalone: true,
  templateUrl: './app-video-player.component.html',
  styleUrls: ['./app-video-player.component.css']
})
export class VideoPlayerComponent {
  @Input() videoUrl: string = '';
}

