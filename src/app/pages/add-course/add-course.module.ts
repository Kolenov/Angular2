// angular modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

// routes
import { RouterModule } from '@angular/router';
import { addCourseRoutes } from './add-course.routes';

// custom components
import { AddCourseComponent } from './add-course.component';

@NgModule({
  declarations: [
    AddCourseComponent
  ],
  imports: [
    RouterModule.forChild(addCourseRoutes),
    SharedModule
  ]
})
export class AddCourseModule {
}
