import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cr-course-search',
  templateUrl: 'course-search.html',
  styleUrls: [ './course-search.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseSearchComponent {
  @Input() public search: string;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  searchCourse(value: string): void {
    this.onSearch.emit(value);
  }
}
