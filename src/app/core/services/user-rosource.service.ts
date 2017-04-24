import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';
import { AuthorizedHttpService } from './authorized-http.service';

@Injectable()
export class UserResourceService {
  constructor(private authorizedHttp: AuthorizedHttpService) {
  }

  getUserInfo(): Observable<Response> {
    return this.authorizedHttp.post('/auth/userinfo', {});
  }
}
