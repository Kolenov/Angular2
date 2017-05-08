import {
  Component, ViewEncapsulation, Input, forwardRef, OnInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorService } from '../../../core/services';

const CUSTOM_RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ControlValueAccessorService),
  multi: true
};

@Component({
	selector: 'cr-duration-input',
	templateUrl: './duration-input.html',
  styleUrls: [ './duration-input.scss' ],
	encapsulation: ViewEncapsulation.None,
  providers: [ CUSTOM_RADIO_VALUE_ACCESSOR, ControlValueAccessorService ]
})
export class DurationInputComponent {
  @Input() inputClass: string = '';
  @Input() wrapperClass: string = '';
  @Input() nameInput: string = '';
  @Input() nameField: string;
  @Input() value: string = '';

  constructor(private controlValueAccessorService: ControlValueAccessorService) {}

  updateValue(data: string): void {
    this.value = data;
  }

  getWrapperClasses(): string {
    const classes: string[] = [
      'wrapper-duration-input',
      this.wrapperClass
    ];

    return classes.join(' ');
  }

  onBlur() {
    this.controlValueAccessorService.onBlur();
  }

  setValue(item): void {
    this.updateValue(item.target.value);

    this.controlValueAccessorService.setValue(item);
  }
}
