import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared';
import { CourseFormComponent } from './course-form.component';
import { DatePipe } from '@angular/common';

@NgModule({
	declarations: [
    CourseFormComponent
  ],
	exports: [CourseFormComponent],
  imports: [
    SharedModule
  ],
  providers: [DatePipe]
})

export class CourseFormModule {
}
