import {
  Pipe,
  PipeTransform
} from '@angular/core';
import { CourseItem } from '../../models';
import * as _ from 'lodash';

@Pipe({
  name: 'crFilterBy',
  pure: false
})
export class FilterByPipe implements PipeTransform {

  transform(courses: CourseItem[], field: string, value: string) {
    return _.filter(courses, (el) => {
      const searchValue = el[field].toLowerCase();

      return searchValue.indexOf(value) !== -1;
    });
  }
}
