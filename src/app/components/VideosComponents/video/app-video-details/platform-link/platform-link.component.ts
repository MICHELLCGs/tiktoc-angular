import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-platform-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './platform-link.component.html',
  styleUrl: './platform-link.component.css'
})
export class PlatformLinkComponent {
  @Input() link: string = '#'; // URL por defecto
  @Input() isActivated: boolean = false; // Indica si el link está activo
}
