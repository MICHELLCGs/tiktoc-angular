import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description-message',
  standalone: true,
  imports: [],
  templateUrl: './description-message.component.html',
  styleUrl: './description-message.component.css'
})
export class DescriptionMessageComponent {
  @Input() description: string = ''; 
}
