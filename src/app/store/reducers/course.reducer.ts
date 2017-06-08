import {
  GET_COURSES_SUCCESS, GET_COURSES_ERROR,
  DELETE_COURSE_SUCCESS, DELETE_COURSE_ERROR
} from '../actions';
import { Action } from '@ngrx/store';

const initialState = {
  courses: [],
  start: 0,
  count: 10,
  query: '',
  total: null
};

export function course( state = initialState, action: Action ) {
  switch ( action.type ) {
    case GET_COURSES_SUCCESS:
      return Object.assign({}, state, {
        total: action.payload.count,
        courses: action.payload.courses,
      });

    case DELETE_COURSE_SUCCESS:
      return Object.assign({}, state, action.payload);

    case DELETE_COURSE_ERROR:
    case GET_COURSES_ERROR:
      return Object.assign({}, state, {
        error: {
          status: action.payload.error.status
        },
        token: null
      });

    default:
      return state;
  }
}
