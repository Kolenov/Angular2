import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { CourseItem } from '../../models/course-item.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cr-edit-course',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styleUrls: [ './edit-course.scss' ],
  templateUrl: './edit-course.html'
})

export class EditCourseComponent implements OnInit {
  public model: CourseItem;

  constructor(private router: Router, private routeParams: ActivatedRoute, private CoursesService: CoursesService) {
  }

  public ngOnInit() {
    this.routeParams
      .params
      .subscribe((params) => {
        this.getCourse(params['id']);
      });
  }

  getCourse(id: string): void {
    this.CoursesService.getCourse(id)
      .subscribe((data) => {
          this.model = data;
        }
      );
  }

  submit(event) {
    this.CoursesService.updateCourse(this.model.id, event.value)
      .subscribe((data) => {
          console.log('--------');
          this.router.navigateByUrl('/courses');
        }
      );
  }
}
