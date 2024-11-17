import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-tabs.component.html',
  styleUrls: ['./profile-tabs.component.css']
})
export class ProfileTabsComponent {
  activeTab: string = 'likes'; // Tab activo por defecto

  @Output() tabChange = new EventEmitter<string>(); // Evento que se emite cuando cambia la pestaña

  // Configuración de los tabs con rutas de íconos en assets/icons/
  tabs = [
    { id: 'likes', label: 'Me gusta', icon: 'assets/like.svg' },
    { id: 'surveys', label: 'Encuestas hechas', icon: 'assets/survey.svg' }
  ];

  // Cambiar el tab activo
  selectTab(tabId: string) {
    this.activeTab = tabId;
    this.tabChange.emit(tabId); // Emitir el evento con el ID de la pestaña seleccionada
  }
}
