import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cr-add-todo',
  template: `
    <input type="text" placeholder="Add todo.." [formControl]="control">
    <button (click)="add.next(control.value)">Add</button>
  `
})
export class AddTodoComponent {
  control: FormControl = new FormControl('');
  @Output() add = new EventEmitter();

  @Input()
  public set reset( action ) {
    action && this.control.reset();
  }

}
