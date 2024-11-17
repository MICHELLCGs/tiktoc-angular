import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-prompt',
  standalone: true,
  imports: [],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.css'
})
export class PromptComponent {
  @Input() promptText: string = ''; // Variable para el texto personalizado

}
