import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared';
import { CourseListComponent } from './course-list.component';
import { CourseItemModule } from '../course-item';

@NgModule({
  imports: [
    SharedModule,
    CourseItemModule
  ],
  exports: [
    CourseListComponent
  ],
  declarations: [
    CourseListComponent
  ]
})

export class CourseListModule {
}
