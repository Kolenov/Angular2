import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared';
import { EditCourseFormComponent } from './edit-course-form.component';
import { DatePipe } from '@angular/common';

@NgModule({
	declarations: [
    EditCourseFormComponent
  ],
	exports: [EditCourseFormComponent],
  imports: [
    SharedModule
  ],
  providers: [DatePipe]
})

export class EditCourseFormModule {
}
