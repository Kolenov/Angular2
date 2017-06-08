import {
  Component, ViewEncapsulation, OnInit, OnDestroy, ChangeDetectorRef
} from '@angular/core';
import { CourseItem, CourseRaiting, Pagination } from '../../models';
import { CoursesService, LoaderService } from '../../core/services';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'cr-courses',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html',
})

export class CoursesComponent implements OnInit, OnDestroy {
  public courseList$: Observable<CourseItem[]>;
  public courseId: number;
  public isShowModal: boolean;
  public currentPage: number = 0;
  public itemsPerPage: number = 10;
  private subscription: Subscription[] = [];

  constructor(private coursesService: CoursesService,
              private router: Router,
              private loaderService: LoaderService,
              private changeDetectorRef: ChangeDetectorRef) {
    this.courseList$ = this.coursesService.store$;
  }

  ngOnInit(): void {
    this.getCourses(this.currentPage, this.itemsPerPage);
  }

  getCourses(start: number, count: number, search?: string): void {
    this.coursesService.getCourses(start, count, search);
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
    this.changeDetectorRef.detectChanges();
  }

  deleteCourse() {
    this.hideModal();

    this.subscription.push(this.coursesService.deleteCourse(this.courseId)
      .do(() => {
        this.getCourses(0, 10);
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
    this.router.navigateByUrl(`/courses/${ id }`);
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
