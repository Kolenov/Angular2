import { Action } from '@ngrx/store';

export const GET_COURSES = 'GET_COURSES';
export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';
export const GET_COURSES_ERROR = 'GET_COURSES_ERROR';

export const GET_COURSE = 'GET_COURSE';
export const GET_COURSE_SUCCESS = 'GET_COURSE_SUCCESS';
export const GET_COURSE_ERROR = 'GET_COURSE_ERROR';

export const DELETE_COURSE = 'DELETE_COURSE';
export const DELETE_COURSE_SUCCESS = 'DELETE_COURSE_SUCCESS';
export const DELETE_COURSE_ERROR = 'DELETE_COURSE_ERROR';

export function getCoursesAction(start: number, count: number, query?: string): Action {
  return {
    type: GET_COURSES,
    payload: {
      start,
      count,
      query
    }
  };
}

export function getCourseAction(id: number): Action {
  return {
    type: GET_COURSES,
    payload: { id }
  };
}

export function deleteCourseAction(id: number): Action {
  return {
    type: DELETE_COURSE,
    payload: { id }
  };
}
