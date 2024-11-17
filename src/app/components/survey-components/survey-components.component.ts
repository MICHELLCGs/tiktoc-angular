import { Component } from '@angular/core';

import { SurveyTitleComponent } from './survey-title/survey-title.component';
import { SurveyQuestionComponent } from './survey-question/survey-question.component';
import { SurveyOptionsComponent } from './survey-options/survey-options.component';
import { SurveyButtonComponent } from './survey-button/survey-button.component';


@Component({
  selector: 'app-survey-components',
  standalone: true,
  imports: [    SurveyTitleComponent,
    SurveyQuestionComponent,
    SurveyOptionsComponent,
    SurveyButtonComponent],
  templateUrl: './survey-components.component.html',
  styleUrl: './survey-components.component.css'
})
export class SurveyComponentsComponent {
  surveyData = {
    title: 'Nombre de la película',
    imageUrl: 'assets/movie-image.png',
    question: '¿Pregunta #1?',
    options: ['Opción #1', 'Opción #2', 'Opción #3', 'Opción #4'],
    buttonLabel: 'Siguiente'
  };
}
