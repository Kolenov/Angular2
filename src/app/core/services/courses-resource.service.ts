import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { AuthorizedHttpService } from './authorized-http.service';
import { CourseItem, TopRated } from '../../models';
import { HelperService } from './helper.service';

@Injectable()
export class CoursesResourceService {
  constructor(private authorizedHttp: AuthorizedHttpService, private helperService: HelperService) {
  }

  getCourses(start: number, count: number, query?: string): Observable<Response> {
    let requestOptions = new RequestOptions();
    let urlParams: URLSearchParams = new URLSearchParams();

    urlParams.set('start', start.toString());
    urlParams.set('count', count.toString());
    urlParams.set('query', query);

    requestOptions.search = urlParams;

    return this.authorizedHttp.get('/courses', requestOptions)
      .map(this.parseResponce);
  }

  getCourse(id: number): Observable<Response> {
    return this.authorizedHttp.get(`/courses/${id}`)
      .map(this.parseResponce);
  }

  updateCourse(id: number, data: CourseItem): Observable<Response> {
    let requestOptions = new RequestOptions();

    requestOptions.body = data;

    return this.authorizedHttp.put(`/courses/${id}`, {}, requestOptions)
      .map(this.parseResponce);
  }

  updateTopRated(id: number, data: TopRated): Observable<Response> {
    let requestOptions = new RequestOptions();

    requestOptions.body = data;

    return this.authorizedHttp.put(`/courses/${id}`, {}, requestOptions)
      .map(this.parseResponce);
  }

  createCourse(data: CourseItem): Observable<Response> {
    let requestOptions = new RequestOptions();

    data.id = this.helperService.generateId();

    requestOptions.body = data;

    return this.authorizedHttp.post('/courses', {}, requestOptions)
      .map(this.parseResponce);
  }

  deleteCourse(id: number): Observable<Response> {
    console.log('--- id', id);
    return this.authorizedHttp.delete(`/courses/${ id }`)
      .map(this.parseResponce);
  }

  parseResponce(res: Response): Response {
    return res.json();
  }
}
