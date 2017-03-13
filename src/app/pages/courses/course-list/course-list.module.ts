import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { CourseItemModule } from '../course-item';

@NgModule({
  imports: [
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
