import {
  Component, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { CourseItem } from '../../../models';

@Component({
  selector: 'cr-course-list',
  templateUrl: 'course-list.html',
  styleUrls: [ './course-list.scss' ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class CourseListComponent {
  @Input() public courseList: CourseItem;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onEdit: EventEmitter<number> = new EventEmitter<number>();

  constructor(private ref: ChangeDetectorRef) {}

  editCourse(id: number): void {
    this.onEdit.emit(id);
  }

  deleteCourse(id: number): void {
    this.onDelete.emit(id);

    this.ref.markForCheck();
  }
}
