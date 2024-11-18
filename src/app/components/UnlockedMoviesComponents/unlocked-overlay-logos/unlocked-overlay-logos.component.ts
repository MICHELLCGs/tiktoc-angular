import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unlocked-overlay-logos',
  standalone: true,
  imports: [],
  templateUrl: './unlocked-overlay-logos.component.html',
  styleUrl: './unlocked-overlay-logos.component.css'
})
export class UnlockedOverlayLogosComponent {
  @Input() imagePath: string = '';
  @Input() text: string = '';
}
