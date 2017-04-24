import { Injectable } from '@angular/core';
import { UserInfo } from '../../models';
import { Observable } from 'rxjs';
import { RequestOptions, Response } from '@angular/http';
import { AuthorizedHttpService } from './authorized-http.service';

@Injectable()
export class AuthResourceService {
  private baseUrl: string;

  constructor(private authorizedHttp: AuthorizedHttpService) {
    this.baseUrl = 'http://localhost:3004';
  }

  login(data: UserInfo): Observable<Response> {
    return this.authorizedHttp.post(`${ this.baseUrl }/auth/login`, { ...data })
      .map(this.parseResponce);
  }

  parseResponce(res: Response): Response {
    return res.json();
  }
}
