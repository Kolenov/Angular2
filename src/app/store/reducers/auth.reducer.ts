import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, LOGOUT_ERROR } from '../actions';
import { Action } from '@ngrx/store';

const stateFromLS = JSON.parse(localStorage.getItem('user'));

const initialState = stateFromLS && ({token: stateFromLS.token}) || {
  token: null,
  error: null
};

export function auth( state = initialState, action: Action ) {
  switch ( action.type ) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { ...action.payload });

    case LOGOUT_SUCCESS:
      return Object.assign({}, state, { ...action.payload });

    case LOGIN_ERROR:
    case LOGOUT_ERROR:
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
