import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestOptions, Response, URLSearchParams } from '@angular/http';
import { AuthorizedHttpService } from './authorized-http.service';
import { CourseItem, TopRated } from '../../models';
import { HelperService } from './helper.service';
import { CoursesInfo } from '../../models/course-item.model';

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

    return this.authorizedHttp.get('/courses', requestOptions);
  }

  getCourse(id: number): Observable<Response> {
    return this.authorizedHttp.get(`/courses/${id}`);
  }

  updateCourse(id: number, data: CourseItem): Observable<Response> {
    let requestOptions = new RequestOptions();

    requestOptions.body = data;

    return this.authorizedHttp.put(`/courses/${id}`, {}, requestOptions);
  }

  updateTopRated(id: number, data: TopRated): Observable<Response> {
    let requestOptions = new RequestOptions();

    requestOptions.body = data;

    return this.authorizedHttp.put(`/courses/${id}`, {}, requestOptions);
  }

  createCourse(data: CourseItem): Observable<Response> {
    let requestOptions = new RequestOptions();

    requestOptions.body = data;

    return this.authorizedHttp.post('/courses', {}, requestOptions);
  }

  deleteCourse(id: number): Observable<Response> {
    return this.authorizedHttp.delete(`/courses/${ id }`);
  }

  getCoursesUsers(): Observable<Response> {
    return this.authorizedHttp.get('/courses/users');
  }
}
