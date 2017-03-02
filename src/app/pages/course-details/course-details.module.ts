// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './course-details.routes';

// custom components
import { CourseDetailsComponent } from './course-details.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseSearchComponent } from './course-search/course-search.component';

@NgModule({
  declarations: [
    CourseDetailsComponent,
    CourseItemComponent,
    CourseAddComponent,
    CourseSearchComponent
  ],
  imports: [
    routes,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: []
})
export class CourseDetailsModule {
  constructor() {}
}
