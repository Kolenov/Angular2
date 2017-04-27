import { Injectable } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Injectable()
export class ControlValueAccessorService implements ControlValueAccessor {
  public currentValue: any;

  setValue(item) {
    this.value = item.target.value;
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

  writeValue(value: any): void {
    if (value !== this.currentValue) {
      this.currentValue = value;
    }
  }
}
