import {
  Component, ViewEncapsulation, Output, EventEmitter, Input, ChangeDetectionStrategy
} from '@angular/core';
import { CourseItem } from '../../../models';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'cr-edit-course-form',
	templateUrl: './edit-course-form.html',
  styleUrls: [ './edit-course-form.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class EditCourseFormComponent {
  @Input() public courseInfo: CourseItem;
  @Output() onSubmit: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

  submit(event: NgForm): void {
    this.onSubmit.emit(Object.assign(this.courseInfo, event.value));
  }
}
