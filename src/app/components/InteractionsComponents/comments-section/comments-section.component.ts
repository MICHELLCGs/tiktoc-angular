import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentViewComponent } from '../commentcom/comment-view/comment-view.component';
import { CommentInputComponent } from '../commentcom/comment-input/comment-input.component';
import { VideoDetailsComponent } from '../../VideosComponents/video/app-video-details/app-video-details.component';
@Component({
  selector: 'app-comments-section',
  standalone: true,
  imports: [VideoDetailsComponent,CommonModule, FormsModule, CommentViewComponent, CommentInputComponent],
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.css'],
})
export class CommentsSectionComponent {
  video = {
    url: 'https://path-to-video.mp4',
    description: 'Sinopsis corta de la película #pelicula_1 #pelicula_2',
    platform: 'Netflix',
    liked: false,
    likes: 545600,
    comments: ['Buen video', 'Interesante', '¿Dónde es esto?'],
  };

  showCommentBox: boolean = false;

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
}
