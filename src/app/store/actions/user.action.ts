import { Action } from '@ngrx/store';
import { Token } from '../../models';

export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_ERROR = 'GET_USER_INFO_ERROR';
export const RESET_USER_INFO = 'RESET_USER_INFO';

export function getUserAction(): Action {
  return {
    type: GET_USER_INFO
  };
}

export function resetUserAction(): Action {
  return {
    type: RESET_USER_INFO,
    payload: {
      user: null,
      error: null
    }
  };
}
