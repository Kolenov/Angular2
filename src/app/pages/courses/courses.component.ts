import { Component, ViewEncapsulation, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';
import { CoursesService } from '../../services/courses.service';
import { Observable } from 'rxjs';
import { ModalDirective } from 'ng2-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'cr-courses',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html'
})

export class CoursesComponent implements OnInit, OnDestroy {
  public courseList$: Observable<CourseItem[]>;
  public courseId: string;

  @ViewChild('confirmDeleteCourseModal') public confirmDeleteCourseModal: ModalDirective;

  constructor(private CoursesService: CoursesService, private router: Router) {
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
    this.hideConfirmModal();
    this.courseList$ = this.CoursesService.removeCourse(this.courseId);
  }

  onDelete(id: string): void {
    this.courseId = id;

    this.showConfirmModal();
  }

  onEdit(id: string): void {
    this.router.navigateByUrl(`/edit-course/${ id }`);
  }
}
