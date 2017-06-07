import { GET_USER_INFO_SUCCESS, GET_USER_INFO_ERROR, RESET_USER_INFO } from '../actions';
import { Action } from '@ngrx/store';

const initialState = JSON.parse(localStorage.getItem('user')) || {
  user: null,
  error: null
};

export function user( state = initialState, action: Action ) {
  switch ( action.type ) {
    case GET_USER_INFO_SUCCESS:
      return Object.assign({}, state, action.payload );

    case RESET_USER_INFO:
      return Object.assign({}, state, action.payload);

    case GET_USER_INFO_ERROR:
      return Object.assign({}, state, {
        error: {
          status: action.payload.error.status
        },
        user: null
      });

    default:
      return state;
  }
}
