import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-message',
  standalone: true,
  imports: [],
  templateUrl: './title-message.component.html',
  styleUrl: './title-message.component.css'
})
export class TitleMessageComponent {
  @Input() title: string = '';
}
