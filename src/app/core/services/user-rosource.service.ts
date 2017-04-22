import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, Http, Request, RequestMethod, RequestOptions, Response } from '@angular/http';
import { AuthorizedHttpService } from './authorized-http.service';

@Injectable()
export class UserResourceService {
  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:3004';
  }

  getUserInfo(): Observable<Response> {
    let request: Request;
    let requestOptions = new RequestOptions();
    let headers: Headers = new Headers();

    headers.set('Authorization', '58ebfdf7f1f558c5c86e17f6');

    requestOptions.url = `${ this.baseUrl }/auth/userinfo`;
    requestOptions.method = RequestMethod.Post;
    requestOptions.headers = headers;
    request = new Request(requestOptions);

    return this.http.request(request)
      .map(this.parseResponce);

    // return this.http.post(`${ this.baseUrl }/auth/userinfo`, {}, requestOptions)
    //   .map(this.parseResponce);
  }

  parseResponce(res: Response) {
    return res.json();
  }
}
