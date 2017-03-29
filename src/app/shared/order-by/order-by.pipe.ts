import {
  Pipe,
  PipeTransform
} from '@angular/core';
import { CourseItem } from '../../models';
import * as _ from 'lodash';

@Pipe({
  name: 'crOrderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(courses: CourseItem[], order: string, typeSorting?: string) {
    if (typeSorting && typeSorting.length) {
      return _.orderBy(courses, order, typeSorting);
    }

    return _.orderBy(courses, order);
  }
}
