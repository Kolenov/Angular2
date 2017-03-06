import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cr-course-item-actions',
  templateUrl: 'course-item-actions.html',
  styleUrls: [ './course-item-actions.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseItemActionsComponent {
  constructor() {
  }

  editCourse() {
    console.log('edit course');
  }

  deleteCourse() {
    console.log('delete course');
  }
}
