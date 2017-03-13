import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { CourseItem } from './course-item.model';
import { CoursesService } from './courses.service';

@Component({
  selector: 'cr-courses',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html'
})

export class CoursesComponent implements OnInit, OnDestroy {
  public courseList: CourseItem[];

  constructor(private CoursesService: CoursesService) {
    console.log('CourseDetailsComponent constructor');
  }

  public ngOnInit() {
    this.courseList = this.CoursesService.getCourseItems();
  }

  public ngOnDestroy() {}
}
