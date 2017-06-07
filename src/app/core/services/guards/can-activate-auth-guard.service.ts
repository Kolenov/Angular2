import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { UserInfo } from '../../../models/user-info.model';

@Injectable()
export class CanActivateAuthGuard implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate(): Observable<boolean> {
    return this.userService.user$.map((user: UserInfo) => !!user);
  }
}
