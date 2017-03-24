/*
 * Angular 2 decorators and services
 */
import {
  Component,
  ViewEncapsulation,
  NgZone,
  OnInit,
  OnDestroy
} from '@angular/core';
import { AppState } from './app.service';
import { Subscription } from 'rxjs';

/*
 * App Component
 * Top Level Component
 */
@Component({
	selector: 'cr-app',
	encapsulation: ViewEncapsulation.None,
	styles: [
		require('./styles/vendors.scss'),
		require('./styles/index.scss'),
		require('./app.styles.scss')
	],
	template: require('./app.template.html')
})
export class AppComponent implements OnInit, OnDestroy {
  startValue: Date;
  private subscription: Subscription[] = [];

  constructor(private ngZone: NgZone) {
    this.startValue = new Date();
  }

  ngOnInit() {
    console.log(this.ngZone);

    this.subscription.push(this.ngZone.onUnstable
      .subscribe(() => {
        this.startValue = new Date();
        console.log(`start time: ${ this.startValue  }`);
      })
    );

    this.subscription.push(this.ngZone.onStable
      .subscribe(() => {
        console.log(`finish time: ${ new Date().getTime() - this.startValue.getTime() }`);
      })
    );
  }

  ngOnDestroy() {
    if (this.subscription.length) {
      this.subscription.forEach((item) => {
        item.unsubscribe();
      });
    }
  }
}
