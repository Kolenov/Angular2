import { Injectable } from '@angular/core';
import { CourseItem, ExtendedCourseItem, CoursesCount } from '../../models';
import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';
import { CoursesResourceService } from './courses-resource.service';

@Injectable()
export class CoursesService {
  constructor(private coursesResourceService: CoursesResourceService) {
  }

  getCourses(start?: number, count?: number): Observable<CourseItem[]> {
    return this.coursesResourceService.getCourses(start, count)
        .map(this.processingData.bind(this))
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  processingData(data: ExtendedCourseItem[]): CourseItem[] {
    const usingFieldsName: string[] = ['id', 'name', 'duration', 'isTopRated', 'date', 'description', 'authors'];

    return _.map(data, (item: ExtendedCourseItem): CourseItem => {
      return _.pick<CourseItem, ExtendedCourseItem>(item, usingFieldsName);
    });
  }

  getCoursesCount(): Observable<CoursesCount> {
    return this.coursesResourceService.getCoursesCount()
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
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
