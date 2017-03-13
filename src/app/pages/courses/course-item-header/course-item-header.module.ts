import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared';
import { CourseItemHeaderComponent } from './course-item-header.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    CourseItemHeaderComponent
  ],
  declarations: [
    CourseItemHeaderComponent
  ],
  providers: [],
})

export class CourseItemHeaderModule {
  constructor() {}
}
