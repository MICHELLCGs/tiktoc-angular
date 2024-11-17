import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-unlock-link',
  standalone: true, // Esto indica que el componente es standalone
  templateUrl: './unlock-link.component.html',
  styleUrls: ['./unlock-link.component.css']
})
export class UnlockLinkComponent {
  @Input() buttonText: string = 'Desbloquear link';
  @Output() unlock = new EventEmitter<void>();

  onUnlockClick() {
    this.unlock.emit();
  }
}
