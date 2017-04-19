import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInfo } from '../../models';
import { Response } from '@angular/http';
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

  getUserInfoResource(token: string): Observable<UserInfo> {
    return this.userResourceService.getUserInfo(token)
        .map(this.parseResponse.bind(this));
  }

  parseResponse(res: Response): UserInfo {
    const userInfo = res.json();

    this.userInfo = userInfo;

    this.setToStorageUserInfo(userInfo);
    this.userInfo$.next(userInfo);

    return userInfo;
  }

  setToStorageUserInfo(user: UserInfo): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  clearUserInfo(): void {
    this.userInfo$.next(null);

    localStorage.removeItem('user');
  }
}
