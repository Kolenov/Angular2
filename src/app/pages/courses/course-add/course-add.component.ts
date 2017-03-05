import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'course-add',
  templateUrl: 'course-add.html',
  styleUrls: [ './course-add.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseAddComponent {
  constructor() {
  }

  public editCourse() {
    console.log('edit course');
  }
}
