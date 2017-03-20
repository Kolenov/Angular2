import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cr-login',
  encapsulation: ViewEncapsulation.None,
  providers: [ AuthService ],
  styleUrls: [ './login.scss' ],
  templateUrl: './login.html'
})

export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
  }

  public ngOnInit() {}

  onSubmit(event: NgForm) {
    this.authService.login(event.value);

    this.router.navigateByUrl('/courses');
  }
}
