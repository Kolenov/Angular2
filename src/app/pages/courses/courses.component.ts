import {
  Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy, OnDestroy
} from '@angular/core';
import { CourseItem, CourseRaiting } from '../../models';
import { CoursesService, LoaderService, SearchService } from '../../core/services';
import { Observable, Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FilterByPipe } from '../../shared';

@Component({
  selector: 'cr-courses',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html',
})

export class CoursesComponent implements OnInit, OnDestroy {
  public courseList$: Observable<CourseItem[]>;
  public courseId: string;
  public isShowModal: boolean;
  private subscription: Subscription[] = [];
  private searchCourseSorce: Subject<string> = new Subject();

  constructor(private coursesService: CoursesService,
              private searchService: SearchService,
              private router: Router,
              private loaderService: LoaderService,
              private filterByPipe: FilterByPipe) {  }

  ngOnInit(): void {
    this.loaderService.show();

    this.courseList$ = this.searchCourseSorce
      .startWith('')
      .flatMap((query) => {
        return this.coursesService.getCourseItems()
          .map((courses) => {
            const searchByField = 'name';

            return this.filterByPipe.transform(courses, searchByField, query);
          });
      })
      .do(() => {
        this.loaderService.hide();
      });
  }

  ngOnDestroy(): void {
    this.subscription.forEach((item: Subscription) => {
      item.unsubscribe();
    });
  }

  onSearch(search: string): void {
    this.searchCourseSorce.next(search);
    this.loaderService.show(); // remove spinner, implement spinner in service

    this.searchService.search(search)
      .subscribe((data) => {
        console.log('--- search ---', data);
      });
  }

  deleteCourse(): void {
    this.loaderService.show();

    this.hideModal();

    this.subscription.push(this.coursesService.removeCourse(this.courseId)
      .subscribe(() => {
        this.loaderService.hide();
      })
    );
  }

  onToggleRaiting(topRated: CourseRaiting): void {
    this.loaderService.show();

    this.subscription.push(this.coursesService.updateRaiting(topRated.id, topRated.topRated)
      .subscribe(() => {
        this.loaderService.hide();
      })
    );
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
