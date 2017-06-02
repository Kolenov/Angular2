import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TodosService {
  getTodos() {
    const todos = [{
      id: 1,
      title: 'Learn ngrx/store',
      completed: false
    }, {
      id: 2,
      title: 'Learn ngrx/effects',
      completed: true
    }];

    return Observable.timer(1000).mapTo(todos);
  }

  addTodo( title ) {
    return Observable.timer(2000)
      .mapTo({id: Math.random(), title, completed: false});
  }

  toggleTodo( todo ) {
    return Observable.timer(100)
      .map(() => {
        todo.completed = !todo.completed;

        return {...todo};
      });
  }
}
