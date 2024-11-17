import { Component } from '@angular/core';
import {MessageSurveyComponentsComponent} from '../../../components/message-survey-components/message-survey-components.component'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MessageSurveyComponentsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
