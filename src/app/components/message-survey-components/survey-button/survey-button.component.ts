import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-survey-button',
  standalone: true,
  imports: [],
  templateUrl: './survey-button.component.html',
  styleUrl: './survey-button.component.css'
})
export class SurveyButtonComponent {
  @Input() text: string = '';
}
