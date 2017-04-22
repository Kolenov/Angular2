import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {
  generateId(): number {
    const id: number = Date.now() + Math.random();

    return Math.round(id);
  }
}
