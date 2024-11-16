import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() icon: string = '';
  @Input() label: string = '';
}
