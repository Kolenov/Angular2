import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'course-details',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styleUrls: [ './course-details.scss' ],
  templateUrl: './course-details.html'
})

export class CourseDetailsComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('CourseDetailsComponent constructor');
  }

  public ngOnInit() {}

  public ngOnDestroy() {}
}
