// angular modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

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
    SharedModule
  ]
})
export class EditCourseModule {
}
