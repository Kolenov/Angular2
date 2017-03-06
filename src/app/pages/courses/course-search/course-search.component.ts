import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'course-search',
  templateUrl: 'course-search.html',
  styleUrls: [ './course-search.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseSearchComponent {
  constructor() {
  }

  search() {
    console.log('search');
  }
}
