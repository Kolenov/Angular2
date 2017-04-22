import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInfo } from '../../models';
import { UserResourceService } from './user-rosource.service';

@Injectable()
export class UserService {
  public userInfo: UserInfo;
  private userInfo$: BehaviorSubject<UserInfo>;

  constructor(private userResourceService: UserResourceService) {
    const currentUser = JSON.parse(localStorage.getItem('user'));

    this.userInfo$ = new BehaviorSubject<UserInfo>(currentUser);
  }

  getUserInfo(): Observable<UserInfo> {
    return this.userInfo$.asObservable();
  }

  getUserInfoResource(): Observable<UserInfo> {
    return this.userResourceService.getUserInfo()
        .map(this.parseResponse.bind(this));
  }

  parseResponse(res: UserInfo): UserInfo {
    this.userInfo = res;

    this.setToStorageUserInfo(this.userInfo);
    this.userInfo$.next(this.userInfo);

    return this.userInfo;
  }

  setToStorageUserInfo(user: UserInfo): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  clearUserInfo(): void {
    this.userInfo$.next(null);

    localStorage.removeItem('user');
  }
}
