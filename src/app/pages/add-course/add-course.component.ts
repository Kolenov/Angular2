import { Component, ViewEncapsulation, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../../models';
import { Router } from '@angular/router';
import { CoursesService } from '../../core/services';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cr-add-course',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './add-course.scss' ],
  templateUrl: './add-course.html'
})

export class AddCourseComponent implements OnDestroy {
  private subscription: Subscription;

  constructor(private router: Router, private coursesService: CoursesService) {
  }

  onSubmit(event: NgForm): void {
    event.value.date = new Date(event.value.date);

    this.subscription = this.coursesService.createCourse(event.value)
      .subscribe(() => {
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
