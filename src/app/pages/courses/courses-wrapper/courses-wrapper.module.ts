import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared';
import { CourseListModule } from '../course-list';
import { CoursesWrapperComponent } from './courses-wrapper.component';

@NgModule({
  imports: [
    SharedModule,
    CourseListModule
  ],
  exports: [
    CoursesWrapperComponent
  ],
  declarations: [
    CoursesWrapperComponent
  ]
})

export class CoursesWrapperModule {
}
