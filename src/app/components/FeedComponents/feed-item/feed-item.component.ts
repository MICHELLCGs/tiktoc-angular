import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feed-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.css'],
})
export class FeedItemComponent {
  // Video inicial
  video = {
    url: 'https://path-to-video.mp4', // Cambia por una URL válida
    liked: false,
    likes: 545600,
    comments: ['Buen video', 'Interesante', '¿Dónde es esto?'],
  };

  newComment: string = '';
  showCommentBox: boolean = false;

  // Cambia el estado de "Me gusta"
  likeVideo(video: any) {
    video.liked = !video.liked;
    video.liked ? video.likes++ : video.likes--;
  }

  // Muestra u oculta el cuadro de comentarios
  toggleCommentBox() {
    this.showCommentBox = !this.showCommentBox;
  }

  // Agrega un nuevo comentario
  addComment() {
    if (this.newComment.trim()) {
      this.video.comments.push(this.newComment);
      this.newComment = '';
    }
  }
}
