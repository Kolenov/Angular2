import { NgModule } from '@angular/core';
import { CourseItemComponent } from './course-item.component';
import { CourseItemHeaderModule } from '../course-item-header';
import { CourseItemDescriptionModule } from '../course-item-description';
import { CourseItemActionsModule } from '../course-item-actions';
import { SharedModule } from '../../../shared';

@NgModule({
  imports: [
    CourseItemHeaderModule,
    CourseItemDescriptionModule,
    CourseItemActionsModule,
    SharedModule
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
