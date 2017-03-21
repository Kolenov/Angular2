import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { UserInfo } from '../models/user.model';

@Injectable()
export class AuthService {
  private userInfo: UserInfo;

  generateId(): string {
    return _.uniqueId('id_');
  }

  login(data): void {
    this.userInfo = {
      id: this.generateId(),
      token: 'fake-jwt-token',
      ...data
    };

    localStorage.setItem('user', JSON.stringify(this.userInfo));
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  IsAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  getUserInfo(): UserInfo {
    return JSON.parse(localStorage.getItem('user'));
  }
}
