import { Component, OnDestroy } from '@angular/core';

import { AuthService } from './../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  appUser: User;
  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => (this.appUser = appUser));
  }

  logout() {
    this.auth.logout();
  }
}
