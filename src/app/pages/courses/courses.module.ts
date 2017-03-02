// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { RouterModule } from '@angular/router';
import { coursesRoutes } from './courses.routes';

// custom components
import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseSearchModule } from './course-search';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseItemComponent,
    CourseAddComponent
  ],
  imports: [
    RouterModule.forChild(coursesRoutes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CourseSearchModule
  ],
  providers: []
})

export class CoursesModule {
  constructor() {}
}
