import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentsSource = new BehaviorSubject<string[]>([]); // Usamos BehaviorSubject para tener un valor inicial y que los componentes puedan suscribirse a los cambios.
  comments$ = this.commentsSource.asObservable();

  constructor() { }

  // Método para agregar un comentario
  addComment(comment: string) {
    const currentComments = this.commentsSource.value;
    this.commentsSource.next([...currentComments, comment]);
  }

  // Obtener el número de comentarios
  getCommentCount(): number {
    return this.commentsSource.value.length;
  }
}

