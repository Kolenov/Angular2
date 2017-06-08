import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import {
  GET_COURSES, GET_COURSES_SUCCESS, GET_COURSES_ERROR,
  DELETE_COURSE, DELETE_COURSE_SUCCESS, DELETE_COURSE_ERROR
} from '../actions';
import { CoursesResourceService, CoursesService } from '../../core/services';

@Injectable()
export class CourseEffects {
  @Effect() getCorses$ = this.actions$
    .ofType(GET_COURSES)
    .switchMap((action) =>
      this.coursesResourceService.getCourses(action.payload.start, action.payload.count, action.payload.query)
        .map((data) => {
          return this.coursesService.processingData(data);
        })
        .map((data) => {
          return ({type: GET_COURSES_SUCCESS, payload: data});
        })
        .catch((error) => Observable.of({ type: GET_COURSES_ERROR, payload: { error: { status: error.status }}})));

  @Effect() deleteCourse$ = this.actions$
    .ofType(DELETE_COURSE)
    .switchMap((action) =>
      this.coursesResourceService.deleteCourse(action.payload.id)
        .map((data) => ({type: DELETE_COURSE_SUCCESS, payload: data}))
        .catch((error) => Observable.of({ type: DELETE_COURSE_ERROR, payload: { error: { status: error.status }}})))
        .share();

  constructor(private actions$: Actions,
              private coursesService: CoursesService,
              private coursesResourceService: CoursesResourceService) {
  }
}
