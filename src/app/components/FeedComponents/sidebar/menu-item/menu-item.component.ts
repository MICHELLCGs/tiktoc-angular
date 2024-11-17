import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule  // Asegúrate de agregarlo aquí
  ],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() routerLink: string = '';
  isActive: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkIfActive();
      }
    });
    this.checkIfActive();
  }

  checkIfActive() {
    const currentRoute = this.router.url;
    this.isActive = currentRoute === this.routerLink;
  } 
}
