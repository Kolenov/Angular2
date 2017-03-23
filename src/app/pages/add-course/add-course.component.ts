import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { CourseItem } from '../.';
import { Router } from '@angular/router';
import { CoursesService } from '../../core/services';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cr-add-course',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './add-course.scss' ],
  templateUrl: './add-course.html'
})

export class AddCourseComponent implements OnDestroy {
  public model: CourseItem;
  private subscription: Subscription;

  constructor(private router: Router, private coursesService: CoursesService) {
  }

  onSubmit(event: NgForm): void {
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
