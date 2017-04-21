import { Injectable } from '@angular/core';
import { CourseItem, ExtendedCourseItem, CoursesCount } from '../../models';
import { HelperService } from './helper.service';
import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';
import { CoursesResourceService } from './courses-resource.service';

@Injectable()
export class CoursesService {
  private courseListSorce: Subject<CourseItem[]> = new Subject();

  constructor(private helperService: HelperService, private coursesResourceService: CoursesResourceService) {
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

  deleteCourse(id: number): Observable<CourseItem> {
    return this.coursesResourceService.deleteCourse(id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  filteredOutdateCourse(data: ExtendedCourseItem[]): ExtendedCourseItem[]  {
    const outdated: Date = new Date();

    outdated.setDate(outdated.getDate() - 14);

    return _.filter(data, (item: CourseItem): boolean => {
      return item.date > outdated;
    });
  }

  // createCourse(data: CourseItem): Observable<CourseItem> {
  //   const newCourse: CourseItem = {
  //     id: this.helperService.generateId('id_'),
  //     name: data.name,
  //     duration: data.duration,
  //     date: new Date(),
  //     description: data.description
  //   };
  //
  //   this.courseList.push(newCourse);
  //
  //   this.courseListSorce.next([...this.courseList]);
  //
  //   return Observable.of(newCourse);
  // }
  //
  // getCourse(id: string): Observable<CourseItem> {
  //   let course: CourseItem;
  //   const courseId = { id };
  //
  //   course = _.find( this.courseList, courseId);
  //
  //   return Observable.of(_.cloneDeep(course)).delay(500);
  // }
  //
  // updateCourse(id: string, data: CourseItem): Observable<CourseItem> {
  //   let courseItem: CourseItem;
  //
  //   courseItem = _.find(this.courseList, (item) => {
  //     if (item.id === id) {
  //       return Object.assign(item, data);
  //     }
  //   });
  //
  //   this.courseListSorce.next([...this.courseList]);
  //
  //   return Observable.of(courseItem);
  // }
  //
  // updateRaiting(id: string, raiting: boolean): Observable<CourseItem> {
  //   let courseItem: CourseItem;
  //
  //   courseItem = _.find(this.courseList, (item: CourseItem): boolean => {
  //     return item.id === id;
  //   });
  //
  //   courseItem.topRated = raiting;
  //
  //   this.courseListSorce.next([...this.courseList]);
  //
  //   return Observable.of(courseItem);
  // }
}
