import { FormControl } from '@angular/forms';

export function validateDateFormat(data: FormControl): {[key: string]: boolean} {
  const DATE_FORMAT_REGEXP = new RegExp(/^[0-9]{4}[\.][0-9]{2}[\.][0-9]{2}$/g);

  console.log('---- validateDateFormat', data.value, DATE_FORMAT_REGEXP.test(data.value));

  return DATE_FORMAT_REGEXP.test(data.value) ? null : { invalidDateFormat: true };
}
