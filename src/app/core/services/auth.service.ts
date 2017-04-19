import { Injectable } from '@angular/core';
import { UserInfo, Token } from '../../models';
import { Observable, BehaviorSubject } from 'rxjs';
import { Http, Request, RequestMethod, RequestOptions, Response } from '@angular/http';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  public token: string;
  private logIn$: BehaviorSubject<boolean>;
  private baseUrl: string;

  constructor(private http: Http, private userService: UserService) {
    const currentUser = JSON.parse(localStorage.getItem('user'));

    this.baseUrl = 'http://localhost:3004';
    this.token = currentUser && currentUser.fakeToken;
    this.logIn$ = new BehaviorSubject<boolean>(!!this.token);
  }

  login(data: UserInfo): Observable<Token> {
    let requestOptions = new RequestOptions();
    let request: Request;

    requestOptions.url = `${ this.baseUrl }/auth/login`;
    requestOptions.method = RequestMethod.Post;
    requestOptions.body = {
      ...data
    };
    request = new Request(requestOptions);

    return this.http.request(request)
              .map(this.parseLoginResponse.bind(this))
              .flatMap(() => this.userService.getUserInfoResource(this.token))
              .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  parseLoginResponse(res: Response): Token {
    const token = res.json() && res.json().token;

    this.updateToken(token);

    return res.json();
  }

  updateToken(token: string): void {
      this.token = token;
      this.logIn$.next(!!this.token);
  }

  logout(): Observable<boolean> {
    this.userService.clearUserInfo();

    this.updateToken(null);

    return Observable.of(true);
  }

  isAuthorized(): Observable<boolean> {
    return this.logIn$.asObservable();
  }
}
