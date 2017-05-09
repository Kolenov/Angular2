import { Component, ViewEncapsulation, OnDestroy, ChangeDetectionStrategy, Input } from '@angular/core';
import { AuthService } from '../../core/services';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CourseItem } from '../../models';

@Component({
	selector: 'cr-auth-drop-down',
	templateUrl: './auth-drop-down.html',
  styleUrls: [ './auth-drop-down.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class AuthDropDownComponent implements OnDestroy {
  @Input() public userInfo: CourseItem;
  private subscription: Subscription;

  constructor(private authService: AuthService, private router: Router ) {
	}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  logout(): void {
    this.subscription = this.authService.logout()
      .subscribe(() => {
          this.router.navigateByUrl('/login');
        }
      );
  }
}
