import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActionButtonComponent } from './action-button/action-button.component';
import { CommentService } from '../../../../services/comment/comment.service';  // Servicio de Comentarios
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-video-actions',
  standalone: true,
  imports: [ActionButtonComponent],
  templateUrl: './app-video-actions.component.html',
  styleUrls: ['./app-video-actions.component.css']
})
export class VideoActionsComponent implements OnInit {
  @Input() likes: number = 0;
  @Input() comments: number = 0;
  @Input() shares: number = 0;

  @Output() onLike = new EventEmitter<void>();
  @Output() onComment = new EventEmitter<void>();
  @Output() onShare = new EventEmitter<void>();

  isLiked: boolean = false;
  showCommentBox: boolean = false;

  // Inicializamos comments$ como un observable vacío para evitar el error
  comments$: Observable<string[]> = of([]); // Observable de comentarios

  // Observable para contar los comentarios en tiempo real
  commentCount$: Observable<number> = of(0);

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

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    // Asignamos el observable de comentarios desde el servicio
    this.comments$ = this.commentService.comments$;
    this.comments$.subscribe(comments => {
      this.video.comments = comments;  // Actualizamos los comentarios en tiempo real
    });
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    this.likes = this.isLiked ? this.likes + 1 : this.likes - 1;
    this.onLike.emit();
  }

  
  comment() {
    this.onComment.emit();
  }

  share() {
    this.shares += 1;
    this.onShare.emit();
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
      this.commentService.addComment(newMessage);
    }
  }
}