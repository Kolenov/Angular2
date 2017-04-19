import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInfo } from '../../models';
import { Headers, Http, Request, RequestMethod, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserService {
  public userInfo: UserInfo;
  private baseUrl: string;
  private userInfo$: BehaviorSubject<UserInfo>;

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:3004';
    const currentUser = JSON.parse(localStorage.getItem('user'));

    this.userInfo$ = new BehaviorSubject<UserInfo>(currentUser);
  }

  getUserInfo(): Observable<UserInfo> {
    return this.userInfo$.asObservable();
  }

  getUserInfoResource(token: string): Observable<UserInfo> {
    let request: Request;
    let requestOptions = new RequestOptions();
    let headers: Headers = new Headers();

    headers.set('Authorization', token);

    requestOptions.url = `${ this.baseUrl }/auth/userinfo`;
    requestOptions.method = RequestMethod.Post;
    requestOptions.headers = headers;
    request = new Request(requestOptions);

    return this.http.request(request)
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
