import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, RequestOptions, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class SearchService {
  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:3004';
  }

  search(query: string) {
    let requestOptions = new RequestOptions();
    let request: Request;
    let urlParams: URLSearchParams = new URLSearchParams();

    urlParams.set('login_like', query);
    requestOptions.url = `${this.baseUrl}/users`;
    requestOptions.method = RequestMethod.Get;
    requestOptions.search = urlParams;
    request = new Request(requestOptions);

    return this.http.request(request)
        .map((res: Response) => res.json())
        .map((users) => users.map((item) => {
          return users;
        }));
  }
}
