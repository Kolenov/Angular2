import { NgModule } from '@angular/core';
import { CourseSearchComponent } from './course-search.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    CourseSearchComponent
  ],
  declarations: [
    CourseSearchComponent
  ],
  providers: [],
})

export class CourseSearchModule {
  constructor() {}
}
