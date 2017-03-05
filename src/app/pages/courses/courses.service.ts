import { Injectable } from '@angular/core';
import { CourseItem } from './course-item.model';

@Injectable()
export class CourseService {
  private courseList: CourseItem[] = [{
    id: '1',
    name: 'name 1',
    duration: 5000,
    date: new Date(),
    description: 'description 1'
  }, {
    id: '2',
    name: 'name 2',
    duration: 5000,
    date: new Date(),
    description: 'description 2'
  }, {
    id: '3',
    name: 'name 3',
    duration: 5000,
    date: new Date(),
    description: 'description 3'
  }];

  constructor() {}

  public getCourseItems (): CourseItem[] {
    return this.courseList;
  }
}
