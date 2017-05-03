import { FormControl } from '@angular/forms';

export function validateCheckedCheckbox(data: FormControl): {[key: string]: boolean} {
  let valid: boolean = false;

  if (data.value) {
    data.value.forEach((el) => {
      if (el.checked) {
        valid = true;
      }
    });
  }

  return valid ? null : { invalidCheckedCheckbox: true };
}
