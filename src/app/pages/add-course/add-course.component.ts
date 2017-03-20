import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';
import { Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'cr-add-course',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styleUrls: [ './add-course.scss' ],
  templateUrl: './add-course.html'
})

export class AddCourseComponent implements OnInit {
  public model: CourseItem;

  constructor(private router: Router, private coursesService: CoursesService) {
  }

  public ngOnInit() {
  }

  onSubmit(event): void {
    this.coursesService.createCourse(event.value)
      .subscribe((data) => {
          this.router.navigateByUrl('/courses');
        }
      );
  }
}
