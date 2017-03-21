import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';
import { CoursesService } from '../../services/courses.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'cr-courses',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html',
})

export class CoursesComponent implements OnInit {
  public courseList$: Observable<CourseItem[]>;
  public courseId: string;
  public showModal: boolean;
  public hideModal: boolean;

  constructor(private coursesService: CoursesService, private router: Router) {  }

  ngOnInit(): void {
    this.courseList$ = this.coursesService.getCourseItems();
  }

  onSearch(search: string): void {
    console.log('search', search);
  }

  changeVisibleModal(hide, show): void {
    this.hideModal = hide;
    this.showModal = show;
  }

  hideConfirmModal(): void {
    this.changeVisibleModal(true, false);
  }

  deleteCourse(): void {
    this.coursesService.removeCourse(this.courseId);

    this.changeVisibleModal(true, false);
  }

  onDelete(id: string): void {
    this.courseId = id;

    this.changeVisibleModal(false, true);
  }

  onEdit(id: string): void {
    this.router.navigateByUrl(`/edit-course/${ id }`);
  }
}
