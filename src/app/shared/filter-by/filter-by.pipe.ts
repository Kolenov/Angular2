import {
  Pipe,
  PipeTransform
} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'crFilterBy',
  pure: false
})
export class FilterByPipe implements PipeTransform {

  transform<T>(collection: T, field: string, value: string): T {
    return _.filter(collection, (el) => {
      const searchValue = el[field].toLowerCase();

      return searchValue.indexOf(value) !== -1;
    });
  }
}
