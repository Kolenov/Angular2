import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from '../actions';
import { AuthResourceService } from '../../core/services';

@Injectable()
export class AuthEffects {
  @Effect() login$ = this.actions$
    .ofType(LOGIN)
    .switchMap((action) =>
      this.authResourceService.login(action.payload)
        .map((token) => ({type: LOGIN_SUCCESS, payload: token}))
        .catch((error) => Observable.of({ type: LOGIN_ERROR, payload: { error: { status: error.status }}})));

  @Effect() logout$ = this.actions$
    .ofType(LOGOUT)
    .switchMap((action) =>
      this.authResourceService.logout(action.payload)
        .map((data) => ({type: LOGOUT_SUCCESS, payload: { token: null, error: null }}))
        .catch((error) => Observable.of({ type: LOGOUT_ERROR, payload: { error: { status: error.status }}})));

  constructor(private actions$: Actions,
              private authResourceService: AuthResourceService) {
  }
}
