import { NgModule } from '@angular/core';
import { CourseAddComponent } from './course-add.component';
import { SharedModule } from '../../../shared';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    CourseAddComponent
  ],
  declarations: [
    CourseAddComponent
  ]
})

export class CourseAddModule {
}
