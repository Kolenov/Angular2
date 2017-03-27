// angular modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { EditCourseFormModule } from './edit-course-form';

// routes
import { RouterModule } from '@angular/router';
import { editCourseRoutes } from './edit-course.routes';

// custom components
import { EditCourseComponent } from './edit-course.component';

@NgModule({
  declarations: [
    EditCourseComponent
  ],
  imports: [
    RouterModule.forChild(editCourseRoutes),
    SharedModule,
    EditCourseFormModule
  ]
})
export class EditCourseModule {
}
