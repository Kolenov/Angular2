// angular modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { RouterModule } from '@angular/router';
import { addCourseRoutes } from './add-course.routes';
import { AddCourseComponent } from './add-course.component';
import { DurationOfCourseModule } from './duration-of-course';

@NgModule({
  declarations: [
    AddCourseComponent
  ],
  imports: [
    DurationOfCourseModule,
    RouterModule.forChild(addCourseRoutes),
    SharedModule
  ]
})
export class AddCourseModule {
}
