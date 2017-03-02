import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CourseItemComponent } from './course-item.component';
import { CourseItemActionsModule } from '../course-item-actions';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CourseItemActionsModule
  ],
  exports: [
    CourseItemComponent
  ],
  declarations: [
    CourseItemComponent
  ],
  providers: [],
})

export class CourseItemModule {
  constructor() {}
}
