import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'course-item-header',
  templateUrl: 'course-item-header.html',
  styleUrls: [ './course-item-header.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseItemHeaderComponent {
  @Input() public courseName: string;
  @Input() public courseDuration: number;
  @Input() public courseDate: Date;

  constructor() {
  }
}
