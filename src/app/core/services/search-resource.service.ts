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

  search(query: string): Observable<Response> {
    let requestOptions = new RequestOptions();
    let urlParams: URLSearchParams = new URLSearchParams();

    urlParams.set('query', query);

    requestOptions.search = urlParams;

    return this.authorizedHttp.get(`${ this.baseUrl }/courses`, requestOptions)
      .map(this.parseResponce);
  }

  parseResponce(res: Response) {
    return res.json();
  }
}
