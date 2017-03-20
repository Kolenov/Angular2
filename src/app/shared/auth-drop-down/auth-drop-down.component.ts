import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'cr-auth-drop-down',
	templateUrl: './auth-drop-down.html',
  styleUrls: [ './auth-drop-down.scss' ],
	providers: [ AuthService ],
	encapsulation: ViewEncapsulation.None
})

export class AuthDropDownComponent {
  constructor(private authService: AuthService, private router: Router) {
	}

  isLogin(): boolean {
    return this.authService.IsAuthenticated();
  }

  getUser() {
    if (this.isLogin()) {
      const userInfo = this.authService.getUserInfo();

      return userInfo.email;
    }
  }

  logout() {
    this.authService.logout();

    this.router.navigateByUrl('/');
  }
}
