import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Request, RequestMethod, RequestOptions, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class SearchResourceService {
  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:3004';
  }

  search(query: string): Observable<Response> {
    let requestOptions = new RequestOptions();
    let request: Request;
    let urlParams: URLSearchParams = new URLSearchParams();

    urlParams.set('query', query);

    requestOptions.url = `${ this.baseUrl }/courses`;
    requestOptions.method = RequestMethod.Get;
    requestOptions.search = urlParams;

    request = new Request(requestOptions);
    return this.http.request(request)
      .map(this.parseResponce);
  }

  parseResponce(res: Response) {
    return res.json();
  }
}
