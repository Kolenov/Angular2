import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cr-course-add',
  templateUrl: 'course-add.html',
  styleUrls: [ './course-add.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class CourseAddComponent {
}
