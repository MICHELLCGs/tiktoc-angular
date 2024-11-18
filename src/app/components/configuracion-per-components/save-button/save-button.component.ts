import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-save-button',
  standalone: true,
  imports: [],
  templateUrl: './save-button.component.html',
  styleUrl: './save-button.component.css'
})
export class SaveButtonComponent {
  @Output() save = new EventEmitter<void>();

  onSave(): void {
    this.save.emit();
  }
}
