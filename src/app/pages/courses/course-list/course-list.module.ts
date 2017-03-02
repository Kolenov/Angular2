import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { CourseItemModule } from '../course-item';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    CourseItemModule
  ],
  exports: [
    CourseListComponent
  ],
  declarations: [
    CourseListComponent
  ],
  providers: [],
})

export class CourseListModule {
  constructor() {}
}
