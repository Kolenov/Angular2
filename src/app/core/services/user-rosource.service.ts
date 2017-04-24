import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';
import { AuthorizedHttpService } from './authorized-http.service';

@Injectable()
export class UserResourceService {
  private baseUrl: string;

  constructor(private authorizedHttp: AuthorizedHttpService) {
    this.baseUrl = 'http://localhost:3004';
  }

  getUserInfo(): Observable<Response> {
    return this.authorizedHttp.post(`${ this.baseUrl }/auth/userinfo`, {})
      .map(this.parseResponce);
  }

  parseResponce(res: Response) {
    return res.json();
  }
}
