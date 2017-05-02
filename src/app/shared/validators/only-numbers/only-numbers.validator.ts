import { FormControl } from '@angular/forms';

export function validateOnlyNumbers(data: FormControl): {[key: string]: boolean} {
  const ONLY_NUMBERS_REGEXP = new RegExp(/^\d+$/);

  console.log('------ validateOnlyNumbers', ONLY_NUMBERS_REGEXP.test(data.value));

  return ONLY_NUMBERS_REGEXP.test(data.value) ? null : { invalidOnlyNumbers: true };
}
