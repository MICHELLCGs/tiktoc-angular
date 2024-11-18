import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSurveyComponentsComponent } from './message-survey-components.component';

describe('MessageSurveyComponentsComponent', () => {
  let component: MessageSurveyComponentsComponent;
  let fixture: ComponentFixture<MessageSurveyComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageSurveyComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageSurveyComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
