import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'cr-auth-drop-down',
	templateUrl: './auth-drop-down.html',
  styleUrls: [ './auth-drop-down.scss' ],
	providers: [],
	encapsulation: ViewEncapsulation.None
})

export class AuthDropDownComponent implements OnInit, OnDestroy {
  public isLogin: boolean = false;

  constructor() {
	}

  public ngOnInit() {
    console.log('Home page init');

    this.isLogin = false;
  }

  public ngOnDestroy() {
  }
}
