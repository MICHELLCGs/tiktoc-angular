import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-central-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './central-content.component.html',
  styleUrl: './central-content.component.css'
})
export class CentralContentComponent {
  @Input() content!: { type: string; value?: number; imageUrl?: string };
}
