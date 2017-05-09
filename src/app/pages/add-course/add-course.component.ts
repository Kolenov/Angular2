import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../core/services';
import { Subscription } from 'rxjs';
import { CourseItem } from '../../models';

@Component({
  selector: 'cr-add-course',
  styleUrls: [ './add-course.scss' ],
  templateUrl: './add-course.html',
  encapsulation: ViewEncapsulation.None
})

export class AddCourseComponent implements OnDestroy {
  private subscription: Subscription;

  constructor(private router: Router, private coursesService: CoursesService) {
  }

  submit(data: CourseItem): void {
    this.subscription = this.coursesService.createCourse(data)
      .subscribe((): void => {
          this.router.navigateByUrl('/courses');
        }
      );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
