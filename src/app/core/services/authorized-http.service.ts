import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response,
  XHRBackend
} from '@angular/http';
import { AuthTokenService } from './auth-token.service';

@Injectable()
export class AuthorizedHttpService extends Http {
  private authToken: AuthTokenService;
  private baseUrl: string;

  constructor (backend: XHRBackend, options: RequestOptions, authToken: AuthTokenService) {
    options.headers.set('Authorization', `${ authToken.getToken() }`);

    super(backend, options);

    this.authToken = authToken;
    this.baseUrl = 'http://localhost:3004';
  }

  request(requestUrl: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    let url: string;

    if (typeof requestUrl === 'string') {
      url = this.baseUrl + requestUrl;

      if (!options) {
        options = { headers: new Headers() };
      }

      options.headers.set('Authorization', `${ this.authToken.getToken() }`);
    } else {
      requestUrl.url = this.baseUrl + requestUrl.url;

      requestUrl.headers.set('Authorization', `${ this.authToken.getToken() }`);
    }

    return super.request(url || requestUrl, options).catch(this.catchAuthError(this))
      .map(this.parseResponce);
  }

  parseResponce(res: Response): Response {
    return res.json();
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
