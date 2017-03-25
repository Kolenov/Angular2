import {
  Component, ViewEncapsulation, Input, EventEmitter, Output, ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { CourseItem } from '../../../models';

@Component({
  selector: 'cr-course-item',
  templateUrl: 'course-item.html',
  styleUrls: [ './course-item.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class CourseItemComponent {
  @Input() public course: CourseItem;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onEdit: EventEmitter<number> = new EventEmitter<number>();

  editCourse(id: number): void {
    this.onEdit.emit(id);
  }

  deleteCourse(id: number): void {
    this.onDelete.emit(id);
  }
}
