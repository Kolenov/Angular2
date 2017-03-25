import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cr-course-item-description',
  templateUrl: 'course-item-description.html',
  styleUrls: [ './course-item-description.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class CourseItemDescriptionComponent {
}
