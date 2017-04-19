import { Injectable } from '@angular/core';
import { UserInfo } from '../../models';
import { Observable, BehaviorSubject } from 'rxjs';
import { Http, Request, RequestMethod, RequestOptions, Response } from '@angular/http';

@Injectable()
export class AuthResourceService {
  public token: string;
  private logIn$: BehaviorSubject<boolean>;
  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:3004';
  }

  login(data: UserInfo): Observable<Response> {
    let requestOptions = new RequestOptions();
    let request: Request;

    requestOptions.url = `${ this.baseUrl }/auth/login`;
    requestOptions.method = RequestMethod.Post;
    requestOptions.body = {
      ...data
    };
    request = new Request(requestOptions);

    return this.http.request(request);
  }
}
