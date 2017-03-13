import { Component, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { CourseItem } from '../course-item.model';

@Component({
  selector: 'cr-course-item',
  templateUrl: 'course-item.html',
  styleUrls: [ './course-item.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseItemComponent {
  @Input() public course: CourseItem;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onEdit: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  editCourse(id: number) {
    this.onEdit.emit(id);
  }

  deleteCourse(id: number) {
    this.onDelete.emit(id);
  }
}
