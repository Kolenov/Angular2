import { Component, ViewEncapsulation, Input } from '@angular/core';
import { SearchQuery } from './course-search.model';

@Component({
  selector: 'cr-course-search',
  templateUrl: 'course-search.html',
  styleUrls: [ './course-search.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseSearchComponent {
  @Input() public search;

  constructor() {
  }

  onSubmit(event, value) {
    console.log('submit', event, value);
  }

  searchCourse(event, value) {
    console.log('search', event, value);
  }
}
