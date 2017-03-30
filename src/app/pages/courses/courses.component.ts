import {
  Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy
} from '@angular/core';
import { CourseItem } from '../../models';
import { CoursesService, LoaderService } from '../../core/services';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { FilterByNamePipe } from '../../shared';

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
  public isPresentCourses: boolean;
  private searchCourseSorce: Subject<string> = new Subject();

  constructor(private coursesService: CoursesService,
              private router: Router,
              private loaderService: LoaderService,
              private filterByNamePipe: FilterByNamePipe) {  }

  ngOnInit(): void {
    this.loaderService.show();

    this.courseList$ = this.searchCourseSorce
      .startWith('')
      .flatMap((query) => {
        return this.coursesService.getCourseItems()
          .map((courses) => {
              return this.filterByNamePipe.transform(courses, query);
          });
      })
      .do((data) => {
        this.loaderService.hide();

        this.isPresentCourses = !!data.length;
      });
  }

  onSearch(search: string): void {
    this.loaderService.show();

    this.searchCourseSorce.next(search);
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
