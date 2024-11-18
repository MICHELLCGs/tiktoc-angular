import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppContainerComponent } from '../../../components/FeedComponents/app-container/app-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppContainerComponent,CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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