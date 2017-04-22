import { Injectable } from '@angular/core';
import { UserInfo, Token } from '../../models';
import { Observable, BehaviorSubject } from 'rxjs';
import { Http, Response } from '@angular/http';
import { UserService } from './user.service';
import { AuthResourceService } from './auth-resource.service';

@Injectable()
export class AuthService {
  public token: string;
  private logIn$: BehaviorSubject<boolean>;
  private baseUrl: string;

  constructor(private http: Http, private userService: UserService, private authResourceService: AuthResourceService) {
    const currentUser = JSON.parse(localStorage.getItem('user'));

    this.baseUrl = 'http://localhost:3004';
    this.token = currentUser && currentUser.fakeToken;
    this.logIn$ = new BehaviorSubject<boolean>(!!this.token);
  }

  login(data: UserInfo): Observable<Token> {
    return this.authResourceService.login(data)
              .map(this.parseLoginResponse.bind(this))
              .flatMap(() => this.userService.getUserInfoResource())
              .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  parseLoginResponse(res: Token): Token {
    const token = res.token;

    this.updateToken(token);

    return res;
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
