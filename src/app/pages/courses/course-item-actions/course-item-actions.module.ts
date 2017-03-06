import { NgModule } from '@angular/core';
import { CourseItemActionsComponent } from './course-item-actions.component';
import { CrButtonModule } from '../../../shared/button';

@NgModule({
  imports: [
    CrButtonModule
  ],
  exports: [
    CourseItemActionsComponent
  ],
  declarations: [
    CourseItemActionsComponent
  ],
  providers: [],
})

export class CourseItemActionsModule {
  constructor() {}
}
