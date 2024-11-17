import { Component, Input } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { PromptComponent } from './prompt/prompt.component';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ButtonComponent, PromptComponent, MenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Entrada para la lista de elementos
  @Input() links: { icon: string; label: string; route: string }[] = [];
}
