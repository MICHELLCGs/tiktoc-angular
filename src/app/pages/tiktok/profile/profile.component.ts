import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../../components/FeedComponents/sidebar/sidebar.component'; 
import { PromptComponent } from '../../../components/FeedComponents/sidebar/prompt/prompt.component';
import { ProfileHeaderComponent } from '../../../components/FeedComponents/profile/profile-header/profile-header.component';
import { ProfileTabsComponent } from '../../../components/FeedComponents/profile/profile-tabs/profile-tabs.component';
import { ProfileGalleryComponent } from '../../../components/FeedComponents/profile/profile-gallery/profile-gallery.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ ProfileHeaderComponent, ProfileTabsComponent, ProfileGalleryComponent, SidebarComponent], // Asegúrate de importarlos
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {


  galleryItems: string[] = [
    'assets/item1.jpg',
    'assets/item2.jpg',
    'assets/item3.jpg',
    'assets/item4.jpg',
  ];
/*
// Video inicial
video = {
  url: 'https://path-to-video.mp4', // Cambia por una URL válida
  liked: false,
  likes: 545600,
  comments: ['Buen video', 'Interesante', '¿Dónde es esto?'],
};

newComment: string = '';
showCommentBox: boolean = false;

// Cambia el estado de "Me gusta"
likeVideo(video: any) {
  video.liked = !video.liked;
  video.liked ? video.likes++ : video.likes--;
}

// Muestra u oculta el cuadro de comentarios
toggleCommentBox() {
  this.showCommentBox = !this.showCommentBox;
}

// Agrega un nuevo comentario
addComment() {
  if (this.newComment.trim()) {
    this.video.comments.push(this.newComment);
    this.newComment = '';
  }
}*/
}
