import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cr-course-add',
  templateUrl: 'course-add.html',
  styleUrls: [ './course-add.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseAddComponent {
  constructor(private router: Router) {
  }

  public addCourse(): void {
    this.router.navigateByUrl('/add-course');
  }
}
