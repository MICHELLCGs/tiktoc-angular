import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent {
  username: string = '@arianzesan';
  level: string = 'Principiante';
  coins: number = 0;
  surveysCompleted: number = 0;
}
