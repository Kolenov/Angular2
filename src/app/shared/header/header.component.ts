import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../core/services';
import { UserInfo } from '../../models';

@Component({
	selector: 'cr-header',
	templateUrl: './header.html',
  styleUrls: [ './header.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  public userInfo$: Observable<UserInfo>;

  constructor(private userService: UserService ) {
    this.userInfo$ = userService.user$;
  }
}
