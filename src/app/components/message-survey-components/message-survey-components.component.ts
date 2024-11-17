import { Component } from '@angular/core';
import { TitleMessageComponent } from '../message-survey-components/title-message/title-message.component';
import { SurveyButtonComponent } from '../message-survey-components/survey-button/survey-button.component';
import { CentralContentComponent } from '../message-survey-components/central-content/central-content.component';
import {  DescriptionMessageComponent } from '../message-survey-components/description-message/description-message.component';
@Component({
  selector: 'app-message-survey-components',
  standalone: true,
  imports: [ TitleMessageComponent,
    CentralContentComponent,
    DescriptionMessageComponent,
    SurveyButtonComponent,],
  templateUrl: './message-survey-components.component.html',
  styleUrl: './message-survey-components.component.css'
})
export class MessageSurveyComponentsComponent {
  isSuccess: boolean = false; 

  // Datos dinámicos
  title = this.isSuccess
    ? '¡Terminaste con éxito la encuesta!'
    : 'No lo lograste esta vez';

  centralContent = this.isSuccess
    ? { type: 'coins', value: 10 } 
    : { type: 'image', imageUrl: 'assets/sad-face.png' };

  description = this.isSuccess
    ? '¡Recuerda que mientras más monedas más oportunidades tendrás para desbloquear nuevas películas para disfrutar!'
    : 'Tal vez necesites volver a ver la película o se te escapó algún detalle. ¡Sigue jugando, cada intento te acerca más a la victoria!';

  buttonText = this.isSuccess ? 'Volver a inicio' : 'Volver a intentarlo';
}
