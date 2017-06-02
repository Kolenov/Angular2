import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { HOUR, MINUTES, SECOND, ADVANCE, RECALL, ADD_TODO_SUCCESS } from './course.actions';
import { addTodo, getTodos, toggleTodo } from './home.reducers';
import { TodosEffects } from './todo/todos.effect';

@Component({
  selector: 'cr-home',
  styleUrls: [ './home.scss' ],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent {
  // click$ = new Subject()
  //   .map((value) => ({ type: HOUR, payload: parseInt(value, 10) || 0 });
  //
  // recall$ = new Subject();
  //
  // clickMinutes$ = new Subject()
  //   .map((value) => ({ type: MINUTES, payload: parseInt(value, 10) || 0 });
  //
  // person$ = new Subject()
  //   .map((value) => ({ type: ADVANCE, payload: value });
  //
  // seconds$ = Observable
  //   .interval(1000)
  //   .mapTo({ type: SECOND, payload: 1 });
  //
  // time;
  // people;

  todos: Observable<any>;
  addTodoSuccess$: Observable<any>;

  constructor(private store: Store<any>, private todosEffects: TodosEffects) {
    // this.time = store.select('clock');
    // this.people = store.select('people');
    //
    // Observable.merge(
    //   this.click$,
    //   this.clickMinutes$,
    //   this.seconds$,
    //   this.person$,
    //   this.recall$
    //     .withLatestFrom(this.time, (_, time) => time)
    //     .map((time) => ({ type: RECALL, payload: time }))
    // )
    //   .subscribe(store.dispatch.bind(store));

    this.store.dispatch(getTodos());
    this.todos = store.select('todos');
    this.addTodoSuccess$ = this.todosEffects.addTodo$.filter(( { type } ) => type === ADD_TODO_SUCCESS);
  }

  toggle( todo ) {
    this.store.dispatch(toggleTodo(todo));
  }

  addTodo( title ) {
    this.store.dispatch(addTodo(title));
  }
}
