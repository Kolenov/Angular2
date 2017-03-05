import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CourseItemComponent } from './course-item.component';
import { CourseItemActionsModule } from '../course-item-actions';
import { CourseItemDescriptionModule } from '../course-item-description';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CourseItemActionsModule,
    CourseItemDescriptionModule
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
