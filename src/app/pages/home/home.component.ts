import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { HOUR, MINUTES, SECOND, ADVANCE, RECALL } from './course.actions';

@Component({
  selector: 'cr-home',
  styleUrls: [ './home.scss' ],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent {
  click$ = new Subject()
    .map((value) => ({ type: HOUR, payload: parseInt(value, 10) || 0 });

  recall$ = new Subject();

  clickMinutes$ = new Subject()
    .map((value) => ({ type: MINUTES, payload: parseInt(value, 10) || 0 });

  person$ = new Subject()
    .map((value) => ({ type: ADVANCE, payload: value });

  seconds$ = Observable
    .interval(1000)
    .mapTo({ type: SECOND, payload: 1 });

  time;
  people;

  constructor(store: Store<any>) {
    this.time = store.select('clock');
    this.people = store.select('people');

    Observable.merge(
      this.click$,
      this.clickMinutes$,
      this.seconds$,
      this.person$,
      this.recall$
        .withLatestFrom(this.time, (_, time) => time)
        .map((time) => ({ type: RECALL, payload: time }))
    )
      .subscribe(store.dispatch.bind(store));
  }
}
