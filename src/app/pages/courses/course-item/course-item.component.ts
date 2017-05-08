import {
  Component, ViewEncapsulation, Input, EventEmitter, Output
} from '@angular/core';
import { CourseItem } from '../../../models';
import { CourseRaiting } from '../../../models';

@Component({
  selector: 'cr-course-item',
  templateUrl: 'course-item.html',
  styleUrls: [ './course-item.scss' ],
  encapsulation: ViewEncapsulation.None
})

export class CourseItemComponent {
  @Input() public course: CourseItem;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onEdit: EventEmitter<number> = new EventEmitter<number>();
  @Output() toggleRaiting: EventEmitter<CourseRaiting> = new EventEmitter<CourseRaiting>();

  editCourse(id: number): void {
    this.onEdit.emit(id);
  }

  deleteCourse(id: number): void {
    this.onDelete.emit(id);
  }

  onToggleRaiting(): void {
    this.toggleRaiting.emit({ id: this.course.id, topRated: !this.course.isTopRated });
  }
}
