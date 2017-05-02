import { FormControl } from '@angular/forms';

export function validateOnlyNumbers(data: FormControl): {[key: string]: boolean} {
  let ONLY_NUMBERS_REGEXP = new RegExp(/^\d+$/);

  console.log('------', ONLY_NUMBERS_REGEXP.test(data.value));

  return ONLY_NUMBERS_REGEXP.test(data.value) ? null : { invalidOnlyNumbers: true };
}
