import {
  Component, ViewEncapsulation, OnDestroy
} from '@angular/core';
import { AuthService, UserService, AuthTokenService } from '../../core/services';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Login  } from '../../models';

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

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService,
              private authTokenService: AuthTokenService) {
    this.subscription = this.getSubscriptions().subscribe();
  }

  private getSubscriptions(): Observable<any> {
    return Observable.merge(
      this.authTokenService.token$.do((token) => {
        if (token) {
          this.userService.getUserInfo();
        }
      }),
      this.authService.error$.do((error) => {
        if (error && error.status === 401) {
          this.isError = true;
        }
      }),
      this.userService.user$.do((user) => {
        if (user) {
          this.onSuccess(user);
        }
      }),
      this.userService.error$.do((error) => {
        if (error && error.status === 401) {
          this.isError = true;
        }
      })
    );
  }

  public onSubmit(event: NgForm): void {
    if (event.valid) {
      this.authService.login(event.value);
    }
  }

  public onSuccess(data): void {
    this.isError = false;

    this.userService.setToStorageUserInfo(data);

    this.router.navigateByUrl('/courses');
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
