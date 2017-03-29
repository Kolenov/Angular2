// angular modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { coursesRoutes } from './courses.routes';
import { CoursesComponent } from './courses.component';
import { CourseSearchModule } from './course-search';
import { CourseAddModule } from './course-add';
import { CourseListModule } from './course-list';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    RouterModule.forChild(coursesRoutes),
    CourseSearchModule,
    CourseAddModule,
    CourseListModule,
    SharedModule
  ]
})

export class CoursesModule {
}
