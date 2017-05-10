import { Injectable } from '@angular/core';
import { UserInfo, Token } from '../../models';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';
import { AuthResourceService } from './auth-resource.service';
import { AuthTokenService } from './auth-token.service';

@Injectable()
export class AuthService {
  private logIn$: BehaviorSubject<boolean>;
  private baseUrl: string;

  constructor(private authToken: AuthTokenService,
              private userService: UserService,
              private authResourceService: AuthResourceService) {
    this.baseUrl = 'http://localhost:3004';
    this.logIn$ = new BehaviorSubject<boolean>(!!this.authToken.getToken());
  }

  login(data: UserInfo): Observable<UserInfo> {
    return this.authResourceService.login(data)
              .map(this.parseLoginResponse.bind(this))
              .flatMap(() => this.userService.getUserInfoResource());
  }

  parseLoginResponse(res: Token): Token {
    const token = res.token;

    this.updateToken(token);

    return res;
  }

  updateToken(token: string): void {
      this.authToken.updateToken(token);
      this.logIn$.next(!!token);
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
