import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment-view',
  standalone: true,
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css'],
})
export class CommentViewComponent {
  @Input() username: string = 'User';
  @Input() message: string = 'Este es un comentario.';
}
