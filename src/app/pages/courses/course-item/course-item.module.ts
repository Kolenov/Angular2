import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CourseItemComponent } from './course-item.component';
import { CourseItemHeaderModule } from '../course-item-header';
import { CourseItemDescriptionModule } from '../course-item-description';
import { CourseItemActionsModule } from '../course-item-actions';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CourseItemHeaderModule,
    CourseItemDescriptionModule,
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
