import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LoaderService {
  private isShowLoaderSorce: Subject<boolean> = new Subject();

  getLoader(): Observable<any> {
    return this.isShowLoaderSorce.asObservable().startWith(false);
  }

  show(): void {
    return this.isShowLoaderSorce.next(true);
  }

  hide(): void {
    return this.isShowLoaderSorce.next(false);
  }
}
