import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionBackend, Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthorizedHttpService {

  constructor(private http: Http, private authService: AuthService) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', this.authService.token || '');
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    let headers = new Headers();

    this.createAuthorizationHeader(headers);

    return this.http.get(url, {
      headers
    });
  }

  post(url, data) {
    let headers = new Headers();

    this.createAuthorizationHeader(headers);

    return this.http.post(url, data, {
      headers
    });
  }
}

// export class AuthorizedHttpService extends Http {
//   constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
//     super(backend, defaultOptions);
//   }
//
//   request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
//     console.log('request...');
//     return super.request(url, options).catch(res => {
//       console.log('res', res);
//       // do something
//     });
//   }
//
//   get(url: string, options?: RequestOptionsArgs): Observable<Response> {
//     console.log('get...');
//   return super.get(url, options).catch(res => {
//     // do something
//   });
// }
// }
