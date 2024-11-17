import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../../components/FeedComponents/sidebar/menu/menu.component'; // Importa el componente menú
import { PromptComponent } from '../../../components/FeedComponents/sidebar/prompt/prompt.component';
import { ButtonComponent } from '../../../components/FeedComponents/sidebar/button/button.component';
import { ProfileTabsComponent } from '../../../components/FeedComponents/profile/profile-tabs/profile-tabs.component';
import { ProfileGalleryComponent } from '../../../components/FeedComponents/profile/profile-gallery/profile-gallery.component';
import { SidebarComponent } from '../../../components/FeedComponents/sidebar/sidebar.component';
import { EncuestaItemComponent } from '../../../components/FeedComponents/profile/encuesta-item/encuesta-item.component';
import { AppContainerComponent } from '../../../components/FeedComponents/app-container/app-container.component';
import { ProfileVideoItemComponent } from '../../../components/VideosComponents/profile-video-item/profile-video-item.component';
import { ProfileHeaderComponent } from '../../../components/FeedComponents/profile/profile-header/profile-header.component';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ ProfileHeaderComponent,ProfileVideoItemComponent,AppContainerComponent,CommonModule, MenuComponent, PromptComponent,ButtonComponent , ProfileTabsComponent, ProfileGalleryComponent, SidebarComponent, EncuestaItemComponent], // Asegúrate de importarlos
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  galleryItems: string[] = [
    'assets/item1.jpg',
    'assets/item2.jpg',
    'assets/item3.jpg',
    'assets/item4.jpg',
  ];

  activeTab: string = 'likes'; // Pestaña activa por defecto
  videos = [
    { videoUrl: 'assets/video.mp4' },
    { videoUrl: 'assets/video.mp4' },
    { videoUrl: 'assets/video.mp4' },
    { videoUrl: 'assets/video1.mp4' },
    { videoUrl: 'assets/video.mp4' },
    // Agregar más videos según sea necesario
  ];
  encuestas = [
    { 
      titulo: 'Encuesta 1', 
      descripcion: 'Descripción de la encuesta 1', 
      imagenUrl: 'assets/Google.png' 
    },
    { 
      titulo: 'Encuesta 2', 
      descripcion: 'Descripción de la encuesta 2', 
      imagenUrl: 'assets/path-to-image2.jpg' 
    }
  ];

  // Método que maneja el cambio de pestaña
  onTabChange(tabId: string): void {
    this.activeTab = tabId; // Actualiza la pestaña activa
  }

 
}
