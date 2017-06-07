import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../../models';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthTokenService {
  private store$;
  public token$: Observable<Token>;
  private token: Token = null;

  constructor(private store: Store<any>) {
    this.store$ = this.store.select('auth'); // add type  this.store.select<AuthResponse>('auth');
    this.token$ = this.store$.map((data) => data['token']);

    this.token$.subscribe((token: Token) => {
      this.token = token;
    });
  }

  public getToken(): Token {
    return this.token;
  }
}
