// angular modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { RouterModule } from '@angular/router';
import { addCourseRoutes } from './add-course.routes';
import { AddCourseComponent } from './add-course.component';
import { CourseFormModule } from './course-form/course-form.module';

@NgModule({
  declarations: [
    AddCourseComponent
  ],
  imports: [
    CourseFormModule,
    RouterModule.forChild(addCourseRoutes),
    SharedModule
  ]
})
export class AddCourseModule {
}
