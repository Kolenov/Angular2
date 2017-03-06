import { NgModule } from '@angular/core';
import { CourseAddComponent } from './course-add.component';
import { CrButtonModule } from '../../../shared/button';

@NgModule({
  imports: [
    CrButtonModule
  ],
  exports: [
    CourseAddComponent
  ],
  declarations: [
    CourseAddComponent
  ],
  providers: [],
})

export class CourseAddModule {
  constructor() {}
}
