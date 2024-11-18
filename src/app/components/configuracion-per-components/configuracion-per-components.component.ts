import { Component } from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { SaveButtonComponent } from './save-button/save-button.component';

@Component({
  selector: 'app-configuracion-per-components',
  standalone: true,
  imports: [ProfilePictureComponent, UserFormComponent, SaveButtonComponent],
  templateUrl: './configuracion-per-components.component.html',
  styleUrl: './configuracion-per-components.component.css'
})
export class ConfiguracionPerComponentsComponent {

}
