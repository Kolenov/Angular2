// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './course-details.routes';

// custom components
import { CourseDetailsComponent } from './course-details.component';
import { CourseItemComponent } from './course-item/course-item.component';

@NgModule({
  declarations: [
    CourseDetailsComponent,
    CourseItemComponent
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
