import { Component, Input } from '@angular/core';
import { PlatformLinkComponent } from './platform-link/platform-link.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-details',
  standalone: true,
  imports: [CommonModule,PlatformLinkComponent],
  templateUrl: './app-video-details.component.html',
  styleUrls: ['./app-video-details.component.css']
})
export class VideoDetailsComponent {
  @Input() description: string = '';
  @Input() tags: string[] = [];
}
