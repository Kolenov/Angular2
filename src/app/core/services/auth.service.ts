import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { UserInfo } from '../../models/user.model';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private userInfo: UserInfo;
  private userInfoSource: Subject<any> = new Subject();

  generateId(): string {
    return _.uniqueId('id_');
  }

  getUserInfo(): Observable<any> {
    return this.userInfoSource.asObservable()
                .startWith(JSON.parse(localStorage.getItem('user')));
  }

  login(data): Observable<UserInfo> {
    this.userInfo = {
      id: this.generateId(),
      token: 'fake-jwt-token',
      ...data
    };

    localStorage.setItem('user', JSON.stringify(this.userInfo));

    this.userInfoSource.next(this.userInfo);

    return Observable.of(this.userInfo);
  }

  logout(): Observable<boolean> {
    localStorage.removeItem('user');

    this.userInfoSource.next();

    return Observable.of(true);
  }

  IsAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }
}
