import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { CourseItem } from '../course-item.model';

@Component({
  selector: 'cr-course-list',
  templateUrl: 'course-list.html',
  styleUrls: [ './course-list.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseListComponent {
  @Input() public courseList: CourseItem;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onEdit: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  editCourse(id: number) {
    this.onEdit.emit(id);
  }

  deleteCourse(id: number) {
    this.onDelete.emit(id);
  }
}
