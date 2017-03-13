import { Injectable } from '@angular/core';
import { CourseItem } from './course-item.model';
import { Observable } from 'rxjs';

@Injectable()
export class CoursesService {
  private courseList: CourseItem[] = [{
    id: '1',
    name: 'name 1',
    duration: 5000,
    date: new Date(),
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
    'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer ' +
    'took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ' +
    'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s ' +
    'with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing ' +
    'software like Aldus PageMaker including versions of Lorem Ipsum.'
  }, {
    id: '2',
    name: 'name 2',
    duration: 5000,
    date: new Date(),
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
    'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer ' +
    'took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ' +
    'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s ' +
    'with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing ' +
    'software like Aldus PageMaker including versions of Lorem Ipsum.'
  }, {
    id: '3',
    name: 'name 3',
    duration: 5000,
    date: new Date(),
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
    'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer ' +
    'took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ' +
    'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s ' +
    'with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing ' +
    'software like Aldus PageMaker including versions of Lorem Ipsum.'
  }];

  constructor() {}

  getCourseItems (): Observable<CourseItem[]> {
    return Observable.of(this.courseList);
  }
}
