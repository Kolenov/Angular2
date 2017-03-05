import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { CourseItem } from './course-item.model';
import { CourseService } from './courses.service';

@Component({
  selector: 'courses',
  encapsulation: ViewEncapsulation.None,
  providers: [
    CourseService
  ],
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html'
})

export class CoursesComponent implements OnInit, OnDestroy {
  public courseList: CourseItem[];

  constructor(private CourseService: CourseService) {
    console.log('CourseDetailsComponent constructor');

    this.courseList = [];
  }

  public ngOnInit() {
    this.courseList = this.CourseService.getCourseItems();
  }

  public ngOnDestroy() {}
}
