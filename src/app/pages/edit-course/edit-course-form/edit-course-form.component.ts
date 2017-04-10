import {
  Component, ViewEncapsulation, Output, EventEmitter, Input, ChangeDetectionStrategy, AfterContentInit
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
  course: CourseItem;

  submit(event: NgForm): void {
    event.value.date = new Date( event.value.date );

    this.onSubmit.emit(Object.assign(this.courseInfo, event.value));
  }

  setDate(date: string): void {
    this.courseInfo.date = new Date(date);
  }
}
