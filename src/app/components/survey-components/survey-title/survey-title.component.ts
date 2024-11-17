import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-survey-title',
  standalone: true,
  imports: [],
  templateUrl: './survey-title.component.html',
  styleUrl: './survey-title.component.css'
})
export class SurveyTitleComponent {
  @Input() title: string = ''; 
}
