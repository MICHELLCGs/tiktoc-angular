import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-actions',
  standalone: true,
  templateUrl: './app-video-actions.component.html',
  styleUrls: ['./app-video-actions.component.css']
})
export class VideoActionsComponent {
  @Input() likes: number = 0;
  @Input() comments: number = 0;

  @Output() onLike = new EventEmitter<void>();
  @Output() onComment = new EventEmitter<void>();
  @Output() onShare = new EventEmitter<void>();

  like() {
    this.onLike.emit();
  }

  comment() {
    this.onComment.emit();
  }

  share() {
    this.onShare.emit();
  }
}
