import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ConnectionBackend, Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response,
  XHRBackend
} from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthorizedHttpService extends Http {
  constructor (authService: AuthService,
               backend: XHRBackend,
               options: RequestOptions) {

    let token = authService.token;

    options.headers.set('Authorization', `Bearer ${token}`);

    super(backend, options);
  }
}
// export class AuthorizedHttpService extends Http {
//
//   constructor (backend: XHRBackend, options: RequestOptions, authService: AuthService) {
//     let token = authService.token || '';
//
//     options.headers.set('Authorization', token);
//
//     super(backend, options);
//   }
//
//   request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
//     let token = '21312312';
//
//     if (typeof url === 'string') {
//       if (!options) {
//         options = { headers: new Headers() };
//       }
//
//       options.headers.set('Authorization', token);
//     } else {
//       url.headers.set('Authorization', token);
//     }
//
//     return super.request(url, options).catch(this.catchAuthError(this));
//   }
//
//   private catchAuthError (self: AuthorizedHttpService) {
//     return (res: Response) => {
//       console.log(res);
//
//       if (res.status === 401 || res.status === 403) {
//         console.log(res);
//       }
//
//       return Observable.throw(res);
//     };
//   }
// }
