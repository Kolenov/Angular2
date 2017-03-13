import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cr-course-add',
  templateUrl: 'course-add.html',
  styleUrls: [ './course-add.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseAddComponent {
  constructor() {
  }

  public addCourse(): void {
    console.log('add course');
  }
}
