import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { CoursesService, LoaderService } from '../../core/services';
import { CourseItem } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'cr-edit-course',
  styleUrls: [ './edit-course.scss' ],
  templateUrl: './edit-course.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class EditCourseComponent implements OnInit, OnDestroy {
  public courseInfo$: Observable<CourseItem>;
  private subscription: Subscription[] = [];

  constructor(private router: Router,
              private routeParams: ActivatedRoute,
              private coursesService: CoursesService,
              private loaderService: LoaderService) {
  }

  ngOnInit(): void {
    this.loaderService.show();

    this.courseInfo$ = this.routeParams
      .params
      .switchMap((params: CourseItem) => {
        return this.coursesService.getCourse(params['id']);
      })
      .do(() => {
        this.loaderService.hide();
      });
  }

  submit(event: CourseItem): void {
    this.subscription.push(this.coursesService.updateCourse(event.id, event)
      .subscribe(() => {
        this.router.navigateByUrl('/courses');
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((item: Subscription) => {
      item.unsubscribe();
    });
  }
}
