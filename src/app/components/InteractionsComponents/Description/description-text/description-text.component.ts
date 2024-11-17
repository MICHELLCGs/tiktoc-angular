import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description-text',
  standalone: true, // Esto indica que el componente es standalone
  templateUrl: './description-text.component.html',
  styleUrls: ['./description-text.component.css']
})
export class DescriptionTextComponent {
  @Input() description: string = '';
}
