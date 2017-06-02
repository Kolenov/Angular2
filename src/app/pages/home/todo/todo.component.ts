import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cr-todo',
  template: `
    <p [ngStyle]="{ textDecoration: todo.completed ? 'line-through' : 'none'}"
       *ngFor="let todo of todos.data" 
       (click)="onToggle(todo)"
    >{{todo.title}}</p>
  `})
export class TodoComponent {
  @Input() todos;
  @Output() toggle = new EventEmitter<any>();

  onToggle($event) {
    this.toggle.emit($event);
  }
}
