import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cr-login',
  encapsulation: ViewEncapsulation.None,
  providers: [ AuthService ],
  styleUrls: [ './login.scss' ],
  templateUrl: './login.html'
})

export class LoginComponent implements OnInit {
  constructor(private AuthService: AuthService, private router: Router) {
  }

  public ngOnInit() {}

  onSubmit(event) {
    this.AuthService.login(event.value);

    this.router.navigateByUrl('/courses');
  }
}
