import { Injectable } from '@angular/core';
import { Login } from '../../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loginAction, logoutAction } from '../../store/actions';

@Injectable()
export class AuthService {
  private store$;
  public error$: Observable<any>;

  constructor(private store: Store<any>) {
    this.store$ = this.store.select('auth'); // add type  this.store.select<AuthResponse>('auth');
    this.error$ = this.store$.map((data) => data['error']);
  }

  public login(data: Login): void  {
    this.store$.dispatch(loginAction({ ...data }));
  }

  public logout() {
    this.store$.dispatch(logoutAction());
  }
}
