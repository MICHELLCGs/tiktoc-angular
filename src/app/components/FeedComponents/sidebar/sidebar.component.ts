import { Component, Input } from '@angular/core';
import { LogooComponent } from './logoo/logoo.component';
import { MenuComponent } from './menu/menu.component';
import { LoginPromptComponent } from './login-prompt/login-prompt.component';
import { LoginButtonComponent } from './login-button/login-button.component';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LogooComponent, MenuComponent, LoginPromptComponent, LoginButtonComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Entrada para la lista de elementos
  @Input() links: { icon: string; label: string; route: string }[] = [];
}
