import { Injectable } from '@angular/core';

@Injectable()
export class AuthTokenService {
  public token: string;

  constructor() {
    const currentUser = JSON.parse(localStorage.getItem('user'));

    this.token = currentUser && currentUser.fakeToken;
  }

  updateToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }
}
