import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentViewComponent } from '../commentcom/comment-view/comment-view.component';
import { CommentInputComponent } from '../commentcom/comment-input/comment-input.component';
import { VideoDetailsComponent } from '../../VideosComponents/video/app-video-details/app-video-details.component';
import { VideoActionsComponent } from '../../VideosComponents/video/app-video-actions/app-video-actions.component';
import { CommentService } from '../../../services/comment/comment.service';  // Servicio de Comentarios
import { ActionButtonComponent } from '../../VideosComponents/video/app-video-actions/action-button/action-button.component';

@Component({
  selector: 'app-comments-section',
  standalone: true,
  imports: [ActionButtonComponent, VideoActionsComponent, VideoDetailsComponent,CommonModule, FormsModule, CommentViewComponent, CommentInputComponent],
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.css'],
})
export class CommentsSectionComponent {
  @Input() likes: number = 0;
  @Input() comments: number = 0;
  @Input() shares: number = 0;

  @Output() onLike = new EventEmitter<void>();
  @Output() onComment = new EventEmitter<void>();
  @Output() onShare = new EventEmitter<void>();

  isLiked: boolean = false;
  showCommentBox: boolean = false;
  // Video object
  video = {
    url: 'https://path-to-video.mp4',
    description: 'Sinopsis corta de la película #pelicula_1 #pelicula_2',
    platform: 'Netflix',
    liked: false,
    likes: 545600,
    comments: ['Buen video', 'Interesante', '¿Dónde es esto?'],
  };

  // Computamos el número de comentarios dinámicamente
  get commentCount(): number {
    return this.video.comments.length;
  }

  likeVideo(video: any) {
    video.liked = !video.liked;
    video.liked ? video.likes++ : video.likes--;
  }

  toggleCommentBox() {
    this.showCommentBox = !this.showCommentBox;
  }

  addComment(newMessage: string) {
    if (newMessage.trim()) {
      this.video.comments.push(newMessage);
    }
  }

  share() {
    this.shares += 1;
    this.onShare.emit();
  }

}
