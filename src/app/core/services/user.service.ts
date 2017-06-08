import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInfo } from '../../models';
import { getUserAction, resetUserAction } from '../../store/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class UserService {
  public userInfo: UserInfo;
  private userInfo$: BehaviorSubject<UserInfo>;

  private store$;
  public error$: Observable<any>;
  public user$: Observable<UserInfo>;

  constructor(private store: Store<any>) {
    const currentUser = this.getUserInfoFromStorage();

    this.userInfo$ = new BehaviorSubject<UserInfo>(currentUser);

    this.store$ = this.store.select('user'); // add type  this.store.select<AuthResponse>('auth');
    this.user$ = this.store$.map((data) => data['user']);
    this.error$ = this.store$.map((data) => data['error']);
  }

  public getUserInfo(): void  {
    this.store$.dispatch(getUserAction());
  }

  public resetUserInfo(): void  {
    this.store$.dispatch(resetUserAction());
  }

  public getUserInfoFromStorage(): UserInfo {
    return JSON.parse(localStorage.getItem('user'));
  }

  public setToStorageUserInfo(data: UserInfo): void {
    localStorage.setItem('user', JSON.stringify({ user: data }));
  }

  public clearUserInfo(): void {
    localStorage.removeItem('user');
  }
}
