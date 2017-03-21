import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CourseItem } from '../../models';
import { CoursesService } from '../../services';
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
  public isShowModal: boolean;

  constructor(private coursesService: CoursesService, private router: Router) {  }

  ngOnInit(): void {
    this.courseList$ = this.coursesService.getCourseItems();
  }

  onSearch(search: string): void {
    console.log('search', search);
  }

  changeVisibleModal(isShow): void {
    this.isShowModal = isShow;
  }

  hideConfirmModal(): void {
    this.changeVisibleModal(false);
  }

  deleteCourse(): void {
    this.coursesService.removeCourse(this.courseId);

    this.changeVisibleModal(false);
  }

  onDelete(id: string): void {
    this.courseId = id;

    this.changeVisibleModal(true);
  }

  onEdit(id: string): void {
    this.router.navigateByUrl(`/edit-course/${ id }`);
  }

  hideModal(): void {
    this.changeVisibleModal(false);
  }
}
