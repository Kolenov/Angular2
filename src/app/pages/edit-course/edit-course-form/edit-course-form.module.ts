import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared';
import { EditCourseFormComponent } from './edit-course-form.component';

@NgModule({
	declarations: [
    EditCourseFormComponent
  ],
	exports: [EditCourseFormComponent],
  imports: [
    SharedModule
  ]
})

export class EditCourseFormModule {
}
