import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { AuthorizedHttpService } from './authorized-http.service';
import { CourseItem, TopRated } from '../../models';
import { HelperService } from './helper.service';

@Injectable()
export class CoursesResourceService {
  private baseUrl: string;

  constructor(private http: Http, private authorizedHttp: AuthorizedHttpService, private helperService: HelperService) {
    this.baseUrl = 'http://localhost:3004';
  }

  getCourses(start: number, count: number): Observable<Response> {
    let requestOptions = new RequestOptions();
    let urlParams: URLSearchParams = new URLSearchParams();

    urlParams.set('start', start.toString());
    urlParams.set('count', count.toString());

    requestOptions.search = urlParams;

    return this.authorizedHttp.get(`${ this.baseUrl }/courses`, requestOptions)
      .map(this.parseResponce);
  }

  getCoursesCount(): Observable<Response> {
    return this.authorizedHttp.get(`${ this.baseUrl }/courses/count`)
      .map(this.parseResponce);
  }

  getCourse(id: number): Observable<Response> {
    return this.authorizedHttp.get(`${ this.baseUrl }/courses/${id}`)
      .map(this.parseResponce);
  }

  updateCourse(id: number, data: CourseItem): Observable<Response> {
    let requestOptions = new RequestOptions();

    requestOptions.body = data;

    return this.authorizedHttp.put(`${ this.baseUrl }/courses/${id}`, {}, requestOptions)
      .map(this.parseResponce);
  }

  updateTopRated(id: number, data: TopRated): Observable<Response> {
    let requestOptions = new RequestOptions();

    requestOptions.body = data;

    return this.authorizedHttp.put(`${ this.baseUrl }/courses/${id}`, {}, requestOptions)
      .map(this.parseResponce);
  }

  createCourse(data: CourseItem): Observable<Response> {
    let requestOptions = new RequestOptions();

    data.id = this.helperService.generateId();

    requestOptions.body = data;

    return this.authorizedHttp.post(`${ this.baseUrl }/courses`, {}, requestOptions)
      .map(this.parseResponce);
  }

  deleteCourse(id: number): Observable<Response> {
    return this.authorizedHttp.delete(`${ this.baseUrl }/courses/${ id }`)
      .map(this.parseResponce);
  }

  parseResponce(res: Response) {
    return res.json();
  }
}
