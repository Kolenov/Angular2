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
	selector: 'cr-date-input',
	templateUrl: './date-input.html',
  styleUrls: [ './date-input.scss' ],
	encapsulation: ViewEncapsulation.None,
  providers: [ CUSTOM_RADIO_VALUE_ACCESSOR, ControlValueAccessorService ]
})
export class DateInputComponent {
  @Input() inputClass: string = '';
  @Input() placeholderInput: string = '';
  @Input() nameInput: string = '';
  @Input() value: string = '';

  constructor(private controlValueAccessorService: ControlValueAccessorService) {}

  onBlur() {
    this.controlValueAccessorService.onBlur();
  }

  setValue(event: Event): void {
    this.controlValueAccessorService.setValue(event);
  }
}
