import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { CourseItem } from './course-item.model';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cr-courses',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html'
})

export class CoursesComponent implements OnInit, OnDestroy {
  public courseList$: Observable<CourseItem[]>;

  constructor(private CoursesService: CoursesService) {
    console.log('CourseDetailsComponent constructor');
  }

  ngOnInit() {
    this.courseList$ = this.CoursesService.getCourseItems();
  }

  ngOnDestroy() {}

  onSearch(search: string): void {
    console.log('search', search);
  }

  onDelete(id: number): void {
    console.log('delete', id);
  }

  onEdit(id: number): void {
    console.log('edit', id);
  }
}
