import { Component, ViewEncapsulation, Input } from '@angular/core';
import { CourseItem } from '../course-item.model';

@Component({
  selector: 'cr-course-list',
  templateUrl: 'course-list.html',
  styleUrls: [ './course-list.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseListComponent {
  @Input() public courseList: CourseItem;

  constructor() {}
}
