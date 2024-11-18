import { Component } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeaderButtonComponent } from './header-button/header-button.component';
import { LogoComponent } from '../../AuthenticationComponents/logo/logo.component';
@Component({
  selector: 'app-headercomponent',
  standalone: true,
  imports: [LogoComponent, SearchBarComponent,HeaderButtonComponent],
  templateUrl: './headercomponent.component.html',
  styleUrl: './headercomponent.component.css'
})
export class HeadercomponentComponent {

}
