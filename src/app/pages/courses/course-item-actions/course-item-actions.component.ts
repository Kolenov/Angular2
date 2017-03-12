import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'cr-course-item-actions',
  templateUrl: 'course-item-actions.html',
  styleUrls: [ './course-item-actions.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseItemActionsComponent {
  @Input() public courseId: number;

  constructor() {
  }

  editCourse() {
    console.log('edit course id', this.courseId);
  }

  deleteCourse() {
    console.log('delete course id', this.courseId);
  }
}
