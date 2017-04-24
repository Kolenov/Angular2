import { Injectable } from '@angular/core';
import { CourseItem, ExtendedCourseItem, CoursesCount } from '../../models';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { CoursesResourceService } from './courses-resource.service';
import { CoursesInfo } from '../../models/course-item.model';

@Injectable()
export class CoursesService {
  constructor(private coursesResourceService: CoursesResourceService) {
  }

  getCourses(start: number, count: number, query?: string): Observable<CourseItem[]> {
    return this.coursesResourceService.getCourses(start, count, query)
        .map(this.processingData.bind(this))
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  processingData(data: CoursesInfo): CoursesInfo {
    const usingFieldsName: string[] = ['id', 'name', 'duration', 'isTopRated', 'date', 'description', 'authors'];

    data.courses = _.map(data.courses, (item: ExtendedCourseItem): CourseItem => {
      return _.pick<CourseItem, ExtendedCourseItem>(item, usingFieldsName);
    });

    return data;
  }

  getCourse(id: number): Observable<CourseItem> {
    return this.coursesResourceService.getCourse(id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteCourse(id: number): Observable<CourseItem> {
    return this.coursesResourceService.deleteCourse(id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateCourse(id: number, data: CourseItem): Observable<CourseItem> {
    return this.coursesResourceService.updateCourse(id, data)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateRaiting(id: number, raiting: boolean): Observable<CourseItem> {
    return this.coursesResourceService.updateTopRated(id, { isTopRated: raiting })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  createCourse(data: CourseItem): Observable<CourseItem> {
    return this.coursesResourceService.createCourse(data)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  filteredOutdateCourse(data: ExtendedCourseItem[]): ExtendedCourseItem[]  {
    const outdated: Date = new Date();

    outdated.setDate(outdated.getDate() - 14);

    return _.filter(data, (item: CourseItem): boolean => {
      return item.date > outdated;
    });
  }
}
