import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { CourseSearchComponent } from './course-search.component';
import { CrButtonModule } from '../../../shared/button';

@NgModule({
  imports: [
    CrButtonModule,
    BrowserModule,
    FormsModule
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
