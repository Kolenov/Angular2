import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'course-item-description',
  templateUrl: 'course-item-description.html',
  styleUrls: [ './course-item-description.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseItemDescriptionComponent {
  @Input() public courseDescription: string;

  constructor() {
  }
}
