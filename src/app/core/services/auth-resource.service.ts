import { Injectable } from '@angular/core';
import { UserInfo } from '../../models';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';
import { AuthorizedHttpService } from './authorized-http.service';

@Injectable()
export class AuthResourceService {
  constructor(private authorizedHttp: AuthorizedHttpService) {
  }

  login(data: UserInfo): Observable<Response> {
    return this.authorizedHttp.post('/auth/login', { ...data });
  }

  logout(data): Observable<Response> {
    return this.authorizedHttp.post('/auth/logout', { ...data });
  }
}
