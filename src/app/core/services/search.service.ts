import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseItem } from '../../models';
import { CoursesResourceService } from './courses-resource.service';

@Injectable()
export class SearchService {
  private baseUrl: string;

  constructor(private coursesResourceService: CoursesResourceService) {
    this.baseUrl = 'http://localhost:3004';
  }

  search(query: string, start: number, count: number): Observable<CourseItem[]> {
    return this.coursesResourceService.getCourses(start, count, query)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
