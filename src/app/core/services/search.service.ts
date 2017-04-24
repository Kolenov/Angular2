import { Injectable } from '@angular/core';
import { SearchResourceService } from './search-resource.service';
import { Observable } from 'rxjs';
import { CourseItem } from '../../models';

@Injectable()
export class SearchService {
  private baseUrl: string;

  constructor(private searchResourceService: SearchResourceService) {
    this.baseUrl = 'http://localhost:3004';
  }

  search(query: string): Observable<CourseItem[]> {
    return this.searchResourceService.search(query)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
