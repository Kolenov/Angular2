import { Injectable } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Injectable()
export class ControlValueAccessorService implements ControlValueAccessor {
  public currentValue: any;

  setValue(item) {
    if (item && item.target) {
      this.value = item.target.value;
    } else {
      this.value = item;
    }
  }

  set value(newValue) {
    if (newValue) {
      this.currentValue = newValue;
      this.onChange(newValue);
    }
  }

  get value() {
    return this.currentValue;
  }

  onChange = (_) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onBlur() {
    this.onTouched();
  }

  writeValue(value: any): void {
    if (value !== this.currentValue) {
      this.currentValue = value;
    }
  }
}
