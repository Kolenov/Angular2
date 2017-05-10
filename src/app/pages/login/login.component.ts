import {
  Component, ViewEncapsulation, OnDestroy
} from '@angular/core';
import { AuthService } from '../../core/services';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Login } from '../../models';

@Component({
  selector: 'cr-login',
  styleUrls: [ './login.scss' ],
  templateUrl: './login.html',
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnDestroy {
  public formModel: Login = {
    login: undefined,
    password: undefined
  };
  public isError: boolean = false;

  private subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {
  }

  onSubmit(event: NgForm) {
    if (event.valid) {
      this.subscription = this.authService.login(event.value)
        .catch((data) => {
          if (data.status === 401) {
            this.isError = true;
          }

          return Observable.empty();
        })
        .subscribe(() => {
          this.isError = false;

          this.router.navigateByUrl('/courses');
        });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
