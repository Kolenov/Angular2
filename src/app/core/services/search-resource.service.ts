import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestOptions, Response, URLSearchParams } from '@angular/http';
import { AuthorizedHttpService } from './authorized-http.service';

@Injectable()
export class SearchResourceService {
  private baseUrl: string;

  constructor(private authorizedHttp: AuthorizedHttpService) {
    this.baseUrl = 'http://localhost:3004';
  }

  search(query: string, start: number, count: number): Observable<Response> {
    let requestOptions = new RequestOptions();
    let urlParams: URLSearchParams = new URLSearchParams();

    urlParams.set('query', query);
    urlParams.set('start', start.toString());
    urlParams.set('count', count.toString());

    requestOptions.search = urlParams;

    return this.authorizedHttp.get(`${ this.baseUrl }/courses`, requestOptions)
      .map(this.parseResponce);
  }

  parseResponce(res: Response): Response {
    return res.json();
  }
}
