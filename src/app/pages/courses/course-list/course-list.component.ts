import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { CourseItem } from '../../../models/course-item.model';

@Component({
  selector: 'cr-course-list',
  templateUrl: 'course-list.html',
  styleUrls: [ './course-list.scss' ],
  encapsulation: ViewEncapsulation.None
})

export class CourseListComponent {
  @Input() public courseList: CourseItem;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onEdit: EventEmitter<number> = new EventEmitter<number>();

  editCourse(id: number): void {
    this.onEdit.emit(id);
  }

  deleteCourse(id: number): void {
    this.onDelete.emit(id);
  }
}
