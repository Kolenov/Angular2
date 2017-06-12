import { Injectable } from '@angular/core';
import { CourseItem, ExtendedCourseItem, Users } from '../../models';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { CoursesResourceService } from './courses-resource.service';
import { CoursesInfo } from '../../models/course-item.model';
import { getCoursesAction, deleteCourseAction } from '../../store/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class CoursesService {
  public store$;
  public courses$;
  public error$: Observable<any>;

  constructor(private store: Store<any>, private coursesResourceService: CoursesResourceService) {
    this.store$ = this.store.select('course');
    this.courses$ = this.store$.map((data) => data['courses']);
    this.error$ = this.store$.map((data) => data['error']);
  }

  getCourses(start: number, count: number, query?: string): void {
    this.store$.dispatch(getCoursesAction(start, count, query));
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
      .catch((error: any) => Observable.empty());
  }

  deleteCourse(id: number): void {
    this.store$.dispatch(deleteCourseAction(id));
  }

  updateCourse(id: number, data: CourseItem): Observable<CourseItem> {
    return this.coursesResourceService.updateCourse(id, data)
      .catch((error: any) => Observable.empty());
  }

  updateRaiting(id: number, raiting: boolean): Observable<CourseItem> {
    return this.coursesResourceService.updateTopRated(id, { isTopRated: raiting })
      .catch((error: any) => Observable.empty());
  }

  createCourse(data: CourseItem): Observable<CourseItem> {
    return this.coursesResourceService.createCourse(data)
      .catch((error: any) => Observable.empty());
  }

  getCoursesUsers(): Observable<Users> {
    return this.coursesResourceService.getCoursesUsers()
      .catch((error: any) => Observable.empty());
  }

  // filteredOutdateCourse(data: ExtendedCourseItem[]): ExtendedCourseItem[]  {
  //   const outdated: Date = new Date();
  //
  //   outdated.setDate(outdated.getDate() - 14);
  //
  //   return _.filter(data, (item: CourseItem): boolean => {
  //     return item.date > outdated;
  //   });
  // }
}
