import { TestBed } from '@angular/core/testing';
import { CommentService } from './comment.service';

describe('CommentService', () => {
  let service: CommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with an empty comments list', () => {
    service.comments$.subscribe(comments => {
      expect(comments).toEqual([]); // La lista inicial debe estar vacía
    });
  });

  it('should add a new comment and update the observable', () => {
    service.addComment('Nuevo comentario');
    service.comments$.subscribe(comments => {
      expect(comments).toContain('Nuevo comentario'); // Verificamos que el comentario fue agregado
      expect(comments.length).toBe(1); // Verificamos que hay exactamente un comentario
    });
  });

  it('should return the correct number of comments', () => {
    service.addComment('Comentario 1');
    service.addComment('Comentario 2');
    const count = service.getCommentCount();
    expect(count).toBe(2); // Verificamos que el contador devuelva el número correcto de comentarios
  });

  it('should handle multiple comments correctly', () => {
    const commentsToAdd = ['Comentario 1', 'Comentario 2', 'Comentario 3'];
    commentsToAdd.forEach(comment => service.addComment(comment));

    service.comments$.subscribe(comments => {
      expect(comments).toEqual(commentsToAdd); // Verificamos que todos los comentarios estén presentes
      expect(comments.length).toBe(commentsToAdd.length); // Verificamos la longitud del array
    });
  });
});

