import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { AuthService } from '../../core/services';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoaderService } from '../../core/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cr-login',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './login.scss' ],
  templateUrl: './login.html'
})

export class LoginComponent implements OnDestroy {
  private subscription: Subscription;

  constructor(private authService: AuthService, private router: Router, private loaderService: LoaderService) {
  }

  onSubmit(event: NgForm) {
    this.loaderService.show();

    this.subscription = this.authService.login(event.value)
      .subscribe(() => {
          this.router.navigateByUrl('/courses');

          this.loaderService.hide();
        }
      );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
