import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommentInputComponent } from './comment-input.component';
import { By } from '@angular/platform-browser';

describe('CommentInputComponent', () => {
  let component: CommentInputComponent;
  let fixture: ComponentFixture<CommentInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentInputComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentInputComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the comment when the send button is clicked', () => {
    spyOn(component.commentSent, 'emit');
    component.newComment = 'Test Comment';

    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    buttonElement.click();

    expect(component.commentSent.emit).toHaveBeenCalledWith('Test Comment');
    expect(component.newComment).toBe('');
  });

  it('should clear the input field after sending a comment', () => {
    component.newComment = 'Test Comment';

    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    buttonElement.click();

    expect(component.newComment).toBe('');
  });

  it('should not emit an empty comment', () => {
    spyOn(component.commentSent, 'emit');
    component.newComment = '';

    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    buttonElement.click();

    expect(component.commentSent.emit).not.toHaveBeenCalled();
  });

  it('should bind input field to the newComment property', () => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;

    inputElement.value = 'Test Input';
    inputElement.dispatchEvent(new Event('input'));

    expect(component.newComment).toBe('Test Input');
  });
});
