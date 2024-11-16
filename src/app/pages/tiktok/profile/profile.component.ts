import { Component } from '@angular/core';
import { LogooComponent } from '../../../components/FeedComponents/sidebar/logoo/logoo.component'; // Importa el componente logoo
import { MenuComponent } from '../../../components/FeedComponents/sidebar/menu/menu.component'; // Importa el componente menú
import { LoginPromptComponent } from '../../../components/FeedComponents/sidebar/login-prompt/login-prompt.component'; // Importa el login-prompt
import { LoginButtonComponent } from '../../../components/FeedComponents/sidebar/login-button/login-button.component'; 
import { ProfileHeaderComponent } from '../../../components/FeedComponents/profile/profile-header/profile-header.component';
import { ProfileTabsComponent } from '../../../components/FeedComponents/profile/profile-tabs/profile-tabs.component';
import { ProfileGalleryComponent } from '../../../components/FeedComponents/profile/profile-gallery/profile-gallery.component';
import { SidebarComponent } from '../../../components/FeedComponents/sidebar/sidebar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [LogooComponent, MenuComponent, LoginPromptComponent, LoginButtonComponent, ProfileHeaderComponent, ProfileTabsComponent, ProfileGalleryComponent, SidebarComponent], // Asegúrate de importarlos
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
}
