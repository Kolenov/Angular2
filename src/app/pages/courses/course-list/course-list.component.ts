import {
  Component, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy
} from '@angular/core';
import { CourseItem } from '../../../models';
import { CourseRaiting } from '../../../models';

@Component({
  selector: 'cr-course-list',
  templateUrl: 'course-list.html',
  styleUrls: [ './course-list.scss' ],
  encapsulation: ViewEncapsulation.None
})

export class CourseListComponent {
  @Input() public courseList: CourseItem[];
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onEdit: EventEmitter<number> = new EventEmitter<number>();
  @Output() toggleRaiting: EventEmitter<CourseRaiting> = new EventEmitter<CourseRaiting>();

  editCourse(id: number): void {
    this.onEdit.emit(id);
  }

  deleteCourse(id: number): void {
    this.onDelete.emit(id);
  }

  onToggleRaiting(topRated: CourseRaiting): void {
    this.toggleRaiting.emit(topRated);
  }
}
