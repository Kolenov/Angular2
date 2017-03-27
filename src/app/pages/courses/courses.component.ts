import {
  Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy
} from '@angular/core';
import { CourseItem } from '../../models';
import { CoursesService, LoaderService } from '../../core/services';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'cr-courses',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html',
})

export class CoursesComponent implements OnInit {
  public courseList$: Observable<CourseItem[]>;
  public courseId: string;
  public isShowModal: boolean;

  constructor(private coursesService: CoursesService,
              private router: Router,
              private loaderService: LoaderService) {  }

  ngOnInit(): void {
    this.loaderService.show();

    this.courseList$ = this.coursesService.getCourseItems()
      .do(() => {
        this.loaderService.hide();
      });
  }

  onSearch(search: string): void {
    console.log('search', search);
  }

  hideConfirmModal(): void {
    this.hideModal();
  }

  deleteCourse(): void {
    this.loaderService.show();

    this.hideModal();

    this.coursesService.removeCourse(this.courseId)
      .do(() => {
        this.loaderService.hide();
      });
  }

  onDelete(id: string): void {
    this.courseId = id;

    this.showModal();
  }

  onEdit(id: string): void {
    this.router.navigateByUrl(`/edit-course/${ id }`);
  }

  hideModal(): void {
    this.isShowModal = false;
  }

  showModal(): void {
    this.isShowModal = true;
  }
}
