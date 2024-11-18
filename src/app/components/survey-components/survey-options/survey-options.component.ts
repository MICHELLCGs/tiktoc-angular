import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-survey-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './survey-options.component.html',
  styleUrl: './survey-options.component.css'
})
export class SurveyOptionsComponent {
  @Input() options: string[] = [];
}
