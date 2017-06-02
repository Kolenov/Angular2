// angular modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

// routes
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { Clock } from './clock';
import { TodosService } from './todo/todos.service';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './todo/add-todo.component';

@NgModule({
  providers: [TodosService],
  declarations: [
    HomeComponent,
    TodoComponent,
    AddTodoComponent,
    Clock
  ],
  imports: [
    RouterModule.forChild(homeRoutes),
    SharedModule
  ]
})
export class HomeModule {
}
