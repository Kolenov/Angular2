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

  transform(courses: CourseItem[], key: string, typeSorting: string = 'asc'): CourseItem[] {
    return _.orderBy(courses, key, typeSorting);
  }
}
