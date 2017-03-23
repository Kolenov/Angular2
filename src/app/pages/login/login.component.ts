import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../core/services';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cr-login',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './login.scss' ],
  templateUrl: './login.html'
})

export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {
  }

  onSubmit(event: NgForm) {
    this.authService.login(event.value);

    this.router.navigateByUrl('/courses');
  }
}
