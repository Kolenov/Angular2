import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
	selector: 'cr-auth-drop-down',
	templateUrl: './auth-drop-down.html',
  styleUrls: [ './auth-drop-down.scss' ],
	encapsulation: ViewEncapsulation.None
})

export class AuthDropDownComponent {
  constructor(private authService: AuthService, private router: Router) {
	}

  isLoggedIn(): boolean {
    return this.authService.IsAuthenticated();
  }

  getUser(): string {
    if (this.isLoggedIn()) {
      const userInfo = this.authService.getUserInfo();

      return userInfo.email;
    }
  }

  logout(): void {
    this.authService.logout();

    this.router.navigateByUrl('/');
  }
}
