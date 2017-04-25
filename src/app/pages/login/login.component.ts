import {
  Component, ViewEncapsulation, OnDestroy, ViewChild, OnInit
} from '@angular/core';
import { AuthService } from '../../core/services';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Login } from '../../models';

@Component({
  selector: 'cr-login',
  styleUrls: [ './login.scss' ],
  templateUrl: './login.html',
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit, OnDestroy {
  public formModel: Login = {
    login: undefined,
    password: undefined
  };

  @ViewChild('form') public userForm: NgForm;

  private subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    console.log(this.userForm);
  }

  onSubmit(event: NgForm) {
    if (event.valid) {
      this.subscription = this.authService.login(event.value)
        .subscribe(() => {
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
