import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'cr-login',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styleUrls: [ './login.scss' ],
  templateUrl: './login.html'
})

export class LoginComponent implements OnInit {
  constructor() {
    console.log('Login page constructor');
  }

  public ngOnInit() {}

  login() {
    console.log('login');
  }
}
