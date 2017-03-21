import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services';

@Component({
	selector: 'cr-is-authorized',
	templateUrl: './is-authorized.html',
  styleUrls: [ './is-authorized.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class IsAuthorizedComponent {
	constructor(private authService: AuthService) {}

  isAuth(): boolean {
    return this.authService.IsAuthenticated();
  }
}
