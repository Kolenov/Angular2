import { Component, ViewEncapsulation, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CourseItem } from './course-item.model';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  selector: 'cr-courses',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html'
})

export class CoursesComponent implements OnInit, OnDestroy {
  public courseList$: Observable<CourseItem[]>;
  public courseId: number;
  @ViewChild('confirmDeleteCourseModal') public confirmDeleteCourseModal: ModalDirective;

  constructor(private CoursesService: CoursesService) {
    console.log('CourseDetailsComponent constructor');
  }

  ngOnInit() {
    this.courseList$ = this.CoursesService.getCourseItems();
  }

  ngOnDestroy() {}

  onSearch(search: string): void {
    console.log('search', search);
  }

  hideConfirmModal(): void {
    this.confirmDeleteCourseModal.hide();
  }

  showConfirmModal(): void {
    this.confirmDeleteCourseModal.show();
  }

  deleteCourse(): void {
    console.log('delete', this.courseId);

    this.hideConfirmModal();
  }

  onDelete(id: number): void {
    this.courseId = id;

    this.showConfirmModal();
  }

  onEdit(id: number): void {
    console.log('edit', id);
  }
}
