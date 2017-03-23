import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from '../../services';
import { CourseItem } from '../.';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cr-edit-course',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './edit-course.scss' ],
  templateUrl: './edit-course.html'
})

export class EditCourseComponent implements OnInit, OnDestroy {
  public model: CourseItem;
  private subscription: Subscription[] = [];

  constructor(private router: Router, private routeParams: ActivatedRoute, private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.subscription.push(this.routeParams
      .params
      .switchMap((params: CourseItem) => {
        return this.coursesService.getCourse(params['id']);
      }).subscribe((data) => {
        this.model = data;
      }
    ));
  }

  onSubmit(event: NgForm): void {
    this.subscription.push(this.coursesService.updateCourse(this.model.id, event.value)
      .subscribe(() => {
          this.router.navigateByUrl('/courses');
        }
      ));
  }

  ngOnDestroy(): void {
    if (this.subscription.length) {
      this.subscription.forEach((item) => {
        item.unsubscribe();
      });
    }
  }
}
