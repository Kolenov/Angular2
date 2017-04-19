import { Component, ViewEncapsulation, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../core/services';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cr-login',
  styleUrls: [ './login.scss' ],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnDestroy {
  private subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {
  }

  onSubmit(event: NgForm) {
    this.subscription = this.authService.login(event.value)
      .subscribe(() => {
          this.router.navigateByUrl('/courses');
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
