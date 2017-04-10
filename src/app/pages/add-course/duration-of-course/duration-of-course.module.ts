import { NgModule } from '@angular/core';
import { DurationOfCourseComponent } from './duration-of-course.component';
import { SharedModule } from '../../../shared';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    DurationOfCourseComponent
  ],
  declarations: [
    DurationOfCourseComponent
  ]
})

export class DurationOfCourseModule {
}
