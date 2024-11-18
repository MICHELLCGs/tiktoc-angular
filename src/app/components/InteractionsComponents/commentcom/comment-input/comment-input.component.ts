import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../../../../services/comment/comment.service'; // Importa el servicio

@Component({
  selector: 'app-comment-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css'],
})
export class CommentInputComponent {
  newComment: string = '';

  @Output() commentSent = new EventEmitter<string>();

  constructor(private commentService: CommentService) { }  // Inyecta el servicio

  sendComment() {
    if (this.newComment.trim()) {
      // Emite el comentario como evento (si es necesario para otro componente)
      this.commentSent.emit(this.newComment);
      
      // Agrega el comentario al servicio
      this.commentService.addComment(this.newComment);
      
      this.newComment = '';  // Limpia el campo de entrada
    }
  }
}
