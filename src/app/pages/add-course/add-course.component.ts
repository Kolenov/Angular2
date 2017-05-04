import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../core/services';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

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

  submit(event: NgForm): void {
    console.log('------ submit', event);

    event.value.date = new Date(event.value.date);

    this.subscription = this.coursesService.createCourse(event.value)
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
