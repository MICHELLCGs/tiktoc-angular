import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  sendComment() {
    if (this.newComment.trim()) {
      this.commentSent.emit(this.newComment);
      this.newComment = '';
    }
  }
}
