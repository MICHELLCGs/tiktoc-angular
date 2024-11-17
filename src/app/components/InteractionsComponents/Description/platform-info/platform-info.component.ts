import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-platform-info',
  standalone: true, // Esto indica que el componente es standalone
  templateUrl: './platform-info.component.html',
  styleUrls: ['./platform-info.component.css']
})
export class PlatformInfoComponent {
  @Input() platform: string = 'Plataforma no especificada';
}
