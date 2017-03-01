import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styleUrls: [ './home.scss' ],
  templateUrl: './home.html'
})

export class HomeComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('Home page constructor');
  }

  public ngOnInit() {}

  public ngOnDestroy() {}
}
