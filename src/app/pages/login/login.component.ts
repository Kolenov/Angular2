import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'cr-login',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styleUrls: [ './login.scss' ],
  templateUrl: './login.html'
})

export class LoginComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('Login page constructor');
  }

  public ngOnInit() {}

  public ngOnDestroy() {}
}
