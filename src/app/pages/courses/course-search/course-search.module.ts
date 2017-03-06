import { NgModule } from '@angular/core';
import { CourseSearchComponent } from './course-search.component';
import { CrButtonModule } from '../../../shared/button';

@NgModule({
  imports: [
    CrButtonModule
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
