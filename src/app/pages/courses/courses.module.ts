// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { RouterModule } from '@angular/router';
import { coursesRoutes } from './courses.routes';

// custom components
import { CoursesComponent } from './courses.component';

// custom modules
import { CourseSearchModule } from './course-search';
import { CourseItemModule } from './course-item';
import { CourseAddModule } from './course-add';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    RouterModule.forChild(coursesRoutes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CourseSearchModule,
    CourseItemModule,
    CourseAddModule
  ],
  providers: []
})

export class CoursesModule {
  constructor() {}
}
