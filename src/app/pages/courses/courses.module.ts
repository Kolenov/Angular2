// angular modules
import { NgModule } from '@angular/core';

// routes
import { RouterModule } from '@angular/router';
import { coursesRoutes } from './courses.routes';

// custom components
import { CoursesComponent } from './courses.component';

// custom modules
import { CourseSearchModule } from './course-search';
import { CourseAddModule } from './course-add';
import { CourseListModule } from './course-list';

// services
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    RouterModule.forChild(coursesRoutes),
    CourseSearchModule,
    CourseAddModule,
    CourseListModule
  ],
  providers: [
    CoursesService
  ]
})

export class CoursesModule {
  constructor() {}
}
