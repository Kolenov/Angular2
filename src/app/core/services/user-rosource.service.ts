import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, Http, Request, RequestMethod, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserResourceService {
  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:3004';
  }

  getUserInfo(token: string): Observable<Response> {
    let request: Request;
    let requestOptions = new RequestOptions();
    let headers: Headers = new Headers();

    headers.set('Authorization', token);

    requestOptions.url = `${ this.baseUrl }/auth/userinfo`;
    requestOptions.method = RequestMethod.Post;
    requestOptions.headers = headers;
    request = new Request(requestOptions);

    return this.http.request(request)
      .map(this.parseResponce);
  }

  parseResponce(res: Response) {
    return res.json();
  }
}
