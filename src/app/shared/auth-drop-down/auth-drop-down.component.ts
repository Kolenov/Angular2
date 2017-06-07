import { Component, ViewEncapsulation, OnDestroy, ChangeDetectionStrategy, Input } from '@angular/core';
import { AuthService } from '../../core/services';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CourseItem } from '../../models';
import * as actions from '../../store/actions';
import { AuthEffects } from '../../store/effects/auth.effect';
import { UserService } from '../../core/services/user.service';

@Component({
	selector: 'cr-auth-drop-down',
	templateUrl: './auth-drop-down.html',
  styleUrls: [ './auth-drop-down.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class AuthDropDownComponent implements OnDestroy {
  @Input() public userInfo: CourseItem;
  public logoutSuccess$: Observable<any>;
  private subscription: Subscription;

  constructor(private authService: AuthService,
              private authEffects: AuthEffects,
              private userService: UserService,
              private router: Router) {
    this.logoutSuccess$ = this.authEffects.logout$.filter(({ type }) => type === actions.LOGOUT_SUCCESS);

    this.subscription = this.logoutSuccess$.subscribe(() => {
      this.resetUserInfo();
      this.router.navigateByUrl('/login');
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public logout(): void {
    this.authService.logout();
  }

  public resetUserInfo(): void {
    this.userService.resetUserInfo();
    this.userService.clearUserInfo();
  }
}
