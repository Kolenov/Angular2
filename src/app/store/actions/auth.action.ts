import { Action } from '@ngrx/store';
import { Login, Token } from '../../models';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const GET_TOKEN = 'GET_TOKEN';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';

export function getTokenAction(): Action {
  return {
    type: GET_TOKEN,
  };
}

export function updateTokenAction(token: Token): Action {
  return {
    type: UPDATE_TOKEN,
    payload: {
      token
    }
  };
}

export function loginAction(data: Login): Action {
  return {
    type: LOGIN,
    payload: { ...data }
  };
}

export function logoutAction(): Action {
  return {
    type: LOGOUT
  };
}
