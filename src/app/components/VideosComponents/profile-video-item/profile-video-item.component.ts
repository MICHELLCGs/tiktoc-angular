import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-profile-video-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-video-item.component.html',
  styleUrl: './profile-video-item.component.css'
})
export class ProfileVideoItemComponent {
  @Input() videoUrl: string = '';
  isPlaying: boolean = false;

  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef<HTMLVideoElement>;

  togglePlay(): void {
    const video = this.videoPlayer.nativeElement;
    if (video.paused) {
      video.play();
      this.isPlaying = true;
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }
}
