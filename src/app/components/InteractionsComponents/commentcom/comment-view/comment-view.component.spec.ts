import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentViewComponent } from './comment-view.component';
import { By } from '@angular/platform-browser';

describe('CommentViewComponent', () => {
  let component: CommentViewComponent;
  let fixture: ComponentFixture<CommentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentViewComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the username and message correctly', () => {
    component.username = 'UserTest';
    component.message = 'This is a test message';
    fixture.detectChanges();

    const usernameElement = fixture.debugElement.query(By.css('h4')).nativeElement;
    const messageElement = fixture.debugElement.query(By.css('p')).nativeElement;

    expect(usernameElement.textContent).toContain('UserTest');
    expect(messageElement.textContent).toContain('This is a test message');
  });

  it('should have a placeholder avatar image', () => {
    const avatarElement = fixture.debugElement.query(By.css('.avatar')).nativeElement;
    expect(avatarElement.src).toContain('https://via.placeholder.com/40');
  });
});
