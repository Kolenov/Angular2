import { Component, ViewEncapsulation, Input } from '@angular/core';

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

  onSubmit(value) {
    console.log('submit', value);
  }

  searchCourse(value) {
    console.log('search', value);
  }
}
