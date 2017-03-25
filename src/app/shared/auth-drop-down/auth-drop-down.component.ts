import { Component, ViewEncapsulation, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../core/services';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
	selector: 'cr-auth-drop-down',
	templateUrl: './auth-drop-down.html',
  styleUrls: [ './auth-drop-down.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class AuthDropDownComponent implements OnInit, OnDestroy {
  public userInfo$: Observable<any>;
  private subscription: Subscription;

  constructor(private authService: AuthService, private router: Router ) {
	}

  ngOnInit(): void {
    this.userInfo$ = this.authService.getUserInfo();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  logout(): void {
    this.subscription = this.authService.logout()
      .subscribe(() => {
          this.router.navigateByUrl('/');
        }
      );
  }
}
