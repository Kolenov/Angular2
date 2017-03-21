import { NgModule } from '@angular/core';
import { CourseSearchComponent } from './course-search.component';
import { SharedModule } from '../../../shared';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    CourseSearchComponent
  ],
  declarations: [
    CourseSearchComponent
  ]
})

export class CourseSearchModule {
}
