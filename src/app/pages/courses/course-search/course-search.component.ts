import { Component, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cr-course-search',
  templateUrl: 'course-search.html',
  styleUrls: [ './course-search.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class CourseSearchComponent {
  @Input() public search: string;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  searchCourse(value: string): void {
    this.onSearch.emit(value);
  }
}
