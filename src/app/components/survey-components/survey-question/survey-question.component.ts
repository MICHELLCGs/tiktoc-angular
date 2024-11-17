import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-survey-question',
  standalone: true,
  imports: [],
  templateUrl: './survey-question.component.html',
  styleUrl: './survey-question.component.css'
})
export class SurveyQuestionComponent {
  @Input() question: string = ''; 
  @Input() imageUrl: string = '';
}
