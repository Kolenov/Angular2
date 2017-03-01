import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { CourseItem } from './../../shared/course-item';

@Component({
  selector: 'course-details',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styleUrls: [ './course-details.scss' ],
  templateUrl: './course-details.html'
})

export class CourseDetailsComponent implements OnInit, OnDestroy {
  private courseList: CourseItem[];

  constructor() {
    console.log('CourseDetailsComponent constructor');

    this.courseList = [{
      name: 'name 1',
      duration: 5000,
      date: new Date(),
      description: 'description'
    }, {
      name: 'name 2',
      duration: 5000,
      date: new Date(),
      description: 'description'
    }, {
      name: 'name 3',
      duration: 5000,
      date: new Date(),
      description: 'description'
    }];
  }

  public ngOnInit() {}

  public ngOnDestroy() {}
}
