import {
  Component, ViewEncapsulation, OnInit, OnDestroy, ChangeDetectorRef
} from '@angular/core';
import { CourseItem, CourseRaiting, Pagination, CoursesCount } from '../../models';
import { CoursesService, LoaderService, SearchService } from '../../core/services';
import { Observable, Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'cr-courses',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html',
})

export class CoursesComponent implements OnInit, OnDestroy {
  public courseList$: Observable<CourseItem[]>;
  public coursesCount$: Observable<CoursesCount>;
  public courseId: number;
  public isShowModal: boolean;
  public currentPage: number = 0;
  public itemsPerPage: number = 10;
  private subscription: Subscription[] = [];

  constructor(private coursesService: CoursesService,
              private searchService: SearchService,
              private router: Router,
              private loaderService: LoaderService,
              private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getCoursesCount();
    this.getCourses(0, 10);
  }

  getCourses(start: number, count: number, search?: string): void {
    this.courseList$ = this.coursesService.getCourses(start, count, search);
    this.changeDetectorRef.detectChanges();
  }

  getCoursesCount(): void {
    this.coursesCount$ = this.coursesService.getCoursesCount();
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscription.forEach((item: Subscription) => {
      item.unsubscribe();
    });
  }

  onSearch(search: string) {
    const currentPage: number = 0;
    const itemsPerPage: number = 10;

    this.getCourses(currentPage, itemsPerPage, search);
    this.getCoursesCount();
    this.changeDetectorRef.detectChanges();
  }

  deleteCourse() {
    this.hideModal();

    this.subscription.push(this.coursesService.deleteCourse(this.courseId)
      .do(() => {
        this.getCourses(0, 10);
      })
      .do(() => {
        this.getCoursesCount();
      })
      .subscribe()
    );
  }

  onToggleRaiting(topRated: CourseRaiting): void {
    this.subscription.push(this.coursesService.updateRaiting(topRated.id, topRated.topRated)
      .subscribe((data) => {
        console.log(data); // need update ui
        this.changeDetectorRef.detectChanges();
      })
    );
  }

  onDelete(id: number): void {
    this.courseId = id;

    this.showModal();
  }

  onEdit(id: string): void {
    this.router.navigateByUrl(`/edit-course/${ id }`);
  }

  pageChange(data: Pagination): void {
    this.itemsPerPage = data.count;

    if (data.start === 1) {
      this.currentPage = 0;
    } else {
      this.currentPage = (data.start - 1) * data.count;
    }

    this.getCourses(this.currentPage, this.itemsPerPage);
  }

  hideModal(): void {
    this.isShowModal = false;
  }

  showModal(): void {
    this.isShowModal = true;
  }
}
