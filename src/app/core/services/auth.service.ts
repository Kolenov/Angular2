import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { UserInfo } from '../../models/user.model';
import { Subject, Observable } from 'rxjs';
import { HelperService } from './helper.service';

@Injectable()
export class AuthService {
  private userInfo: UserInfo;
  private userInfoSource: Subject<any> = new Subject();

  constructor(private helperService: HelperService) {
  }

  getUserInfo(): Observable<any> {
    return this.userInfoSource.asObservable()
                .startWith(JSON.parse(localStorage.getItem('user')));
  }

  login(data: UserInfo): Observable<UserInfo> {
    this.userInfo = {
      id: this.helperService.generateId('id_'),
      token: 'fake-jwt-token',
      ...data
    };

    localStorage.setItem('user', JSON.stringify(this.userInfo));

    this.userInfoSource.next(this.userInfo);

    return Observable.of(this.userInfo).delay(2000);
  }

  logout(): Observable<boolean> {
    localStorage.removeItem('user');

    this.userInfoSource.next();

    return Observable.of(true);
  }
}
