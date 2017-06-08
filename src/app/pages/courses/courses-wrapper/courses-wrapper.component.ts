import {
  Component, ViewEncapsulation, Input, Output, EventEmitter, OnChanges, SimpleChanges
} from '@angular/core';
import { CourseItem, CourseRaiting, Pagination, CoursesInfo } from '../../../models';

@Component({
  selector: 'cr-courses-wrapper',
  templateUrl: 'courses-wrapper.html',
  styleUrls: [ './courses-wrapper.scss' ],
  encapsulation: ViewEncapsulation.None
})

export class CoursesWrapperComponent implements OnChanges {
  public currentPage: number = 1;
  public courses: CourseItem;
  public totalCount: number;

  @Input() coursesInfo: CoursesInfo;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onEdit: EventEmitter<number> = new EventEmitter<number>();
  @Output() toggleRaiting: EventEmitter<CourseRaiting> = new EventEmitter<CourseRaiting>();
  @Output() onPageChange: EventEmitter<Pagination> = new EventEmitter<Pagination>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['coursesInfo'] && changes['coursesInfo'].currentValue) {
      console.log('--- changes', changes['coursesInfo']);
      this.courses = changes['coursesInfo'].currentValue.courses;
      this.totalCount = changes['coursesInfo'].currentValue.total;
    }
  }

  editCourse(id: number): void {
    this.onEdit.emit(id);
  }

  deleteCourse(id: number): void {
    this.onDelete.emit(id);
  }

  onToggleRaiting(topRated: CourseRaiting): void {
    this.toggleRaiting.emit(topRated);
  }

  pageChange(data: Pagination) {
    this.currentPage = data.start; // check
    this.onPageChange.emit(data);
  }
}
