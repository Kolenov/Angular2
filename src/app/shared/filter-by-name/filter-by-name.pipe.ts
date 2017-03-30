import {
  Pipe,
  PipeTransform
} from '@angular/core';
import { CourseItem } from '../../models';
import * as _ from 'lodash';

@Pipe({
  name: 'crFilterByName',
  pure: false
})
export class FilterByNamePipe implements PipeTransform {

  transform(courses: CourseItem[], value: string) {
    return _.filter(courses, (el) => {
      const searchValue = el.name.toLowerCase();

      return searchValue.indexOf(value) !== -1;
    });
  }
}
