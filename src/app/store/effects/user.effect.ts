import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { GET_USER_INFO, GET_USER_INFO_SUCCESS, GET_USER_INFO_ERROR } from '../actions';
import { UserResourceService } from '../../core/services';

@Injectable()
export class UserEffects {
  @Effect() getUserInfo$ = this.actions$
    .ofType(GET_USER_INFO)
    .switchMap((action) =>
      this.userResourceService.getUserInfo()
        .map((user) => ({type: GET_USER_INFO_SUCCESS, payload: { user }}))
        .catch((error) => Observable.of({ type: GET_USER_INFO_ERROR, payload: { error: { status: error.status }}})));

  constructor( private actions$: Actions,
               private userResourceService: UserResourceService) {
  }
}
