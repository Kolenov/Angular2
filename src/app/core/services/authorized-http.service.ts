import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response,
  XHRBackend
} from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthorizedHttpService extends Http {
  private authService: AuthService;

  constructor (backend: XHRBackend, options: RequestOptions, authService: AuthService) {
    options.headers.set('Authorization', `Bearer ${authService.token}`);

    super(backend, options);

    this.authService = authService;
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === 'string') {
      if (!options) {
        options = { headers: new Headers() };
      }

      options.headers.set('Authorization', `Bearer ${ this.authService.token }`);
    } else {
      url.headers.set('Authorization', `Bearer ${ this.authService.token }`);
    }

    return super.request(url, options).catch(this.catchAuthError(this));
  }

  private catchAuthError (self: AuthorizedHttpService) {
    return (res: Response): Observable<Response> => {
      console.log(res);

      if (res.status === 401 || res.status === 403) {
        console.log(res);
      }

      return Observable.throw(res);
    };
  }
}
