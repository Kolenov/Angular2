import {
  Pipe,
  PipeTransform
} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'crOrderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform<T>(collection: T, key: string, typeSorting: string = 'asc'): T {
    return _.orderBy(collection, key, typeSorting);
  }
}
