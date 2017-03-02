import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { CourseItem } from './course-item.model';

@Component({
  selector: 'courses',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html'
})

export class CoursesComponent implements OnInit, OnDestroy {
  private courseList: CourseItem[];

  constructor() {
    console.log('CourseDetailsComponent constructor');

    this.courseList = [{
      id: '1',
      name: 'name 1',
      duration: 5000,
      date: new Date(),
      description: 'description'
    }, {
      id: '2',
      name: 'name 2',
      duration: 5000,
      date: new Date(),
      description: 'description'
    }, {
      id: '3',
      name: 'name 3',
      duration: 5000,
      date: new Date(),
      description: 'description'
    }];
  }

  public ngOnInit() {}

  public ngOnDestroy() {}
}
