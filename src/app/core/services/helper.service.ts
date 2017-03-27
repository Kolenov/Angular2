import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class HelperService {
  generateId(prefix?: string): string {
    const prfx = prefix || 'id_';

    return _.uniqueId(prfx);
  }
}
