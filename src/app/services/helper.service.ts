import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class HelperService {
  generateId(): string {
    return _.uniqueId('id_');
  }
}
