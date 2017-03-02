import { Component, ViewEncapsulation, Input } from '@angular/core';
import { CourseItem } from '../course-item.model';

@Component({
  selector: 'course-item',
  templateUrl: 'course-item.html',
  styleUrls: [ './course-item.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseItemComponent {
  @Input() public course: CourseItem;

  constructor() {
  }
}
