import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Request, RequestMethod, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { AuthorizedHttpService } from './authorized-http.service';

@Injectable()
export class CoursesResourceService {
  private baseUrl: string;

  constructor(private http: Http, private authorizedHttpService: AuthorizedHttpService) {
    this.baseUrl = 'http://localhost:3004';
  }

  getCourses(start: number, count: number): Observable<Response> {
    let requestOptions = new RequestOptions();
    let request: Request;
    let urlParams: URLSearchParams = new URLSearchParams();

    urlParams.set('start', start.toString());
    urlParams.set('count', count.toString());

    requestOptions.url = `${ this.baseUrl }/courses`;
    requestOptions.method = RequestMethod.Get;
    requestOptions.search = urlParams;

    request = new Request(requestOptions);

    return this.http.request(request)
      .map(this.parseResponce);
  }

  getCourses1(start: number, count: number): Observable<Response> {
    let requestOptions = new RequestOptions();
    let urlParams: URLSearchParams = new URLSearchParams();

    urlParams.set('start', start.toString());
    urlParams.set('count', count.toString());

    requestOptions.url = `${ this.baseUrl }/courses`;
    requestOptions.method = RequestMethod.Get;
    requestOptions.search = urlParams;

    return this.authorizedHttpService.get(`${ this.baseUrl }/courses`, requestOptions)
      .map(this.parseResponce);
  }

  getCoursesCount(): Observable<Response> {
    let requestOptions = new RequestOptions();
    let request: Request;

    requestOptions.url = `${ this.baseUrl }/courses/count`;
    requestOptions.method = RequestMethod.Get;

    request = new Request(requestOptions);

    return this.http.request(request)
      .map(this.parseResponce);
  }

  deleteCourse(id: number): Observable<Response> {
    let requestOptions = new RequestOptions();
    let request: Request;

    requestOptions.url = `${ this.baseUrl }/courses/${ id }`;
    requestOptions.method = RequestMethod.Delete;

    request = new Request(requestOptions);

    return this.http.request(request)
      .map(this.parseResponce);
  }

  parseResponce(res: Response) {
    return res.json();
  }
}
