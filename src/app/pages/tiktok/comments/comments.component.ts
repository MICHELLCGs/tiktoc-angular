import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppContainerComponent } from '../../../components/FeedComponents/app-container/app-container.component';
import { CommonModule } from '@angular/common';
import { CommentsSectionComponent } from '../../../components/InteractionsComponents/comments-section/comments-section.component';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [AppContainerComponent,CommonModule, CommentsSectionComponent,  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  videoId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.videoId = this.route.snapshot.paramMap.get('id');
    console.log('Video ID:', this.videoId); // Simulación de uso del ID del video
  }
}
