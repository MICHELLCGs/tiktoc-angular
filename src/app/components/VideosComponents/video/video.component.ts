import { Component, Input } from '@angular/core';
import { VideoPlayerComponent } from './app-video-player/app-video-player.component';
import { VideoActionsComponent } from './app-video-actions/app-video-actions.component';
import { VideoDetailsComponent } from './app-video-details/app-video-details.component';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [VideoPlayerComponent, VideoActionsComponent, VideoDetailsComponent],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  @Input() videoUrl: string = ''; // Recibe la URL del video
  likes: number = 545600;
  comments: number = 143;
  description: string = 'Sinopsis corta de la película #pelicula_1 #pelicula_2';
  platform: string = 'Plataforma';

  handleLike() {
    console.log('Liked!');
  }

  handleComment() {
    console.log('Commented!');
  }

  handleShare() {
    console.log('Shared!');
  }
}

