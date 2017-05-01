import {
  Component, ViewEncapsulation, Input, forwardRef, OnInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorService } from '../../../core/services';
import * as _ from 'lodash';

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
export class DateInputComponent implements OnInit {
  @Input() inputClass: string = '';
  @Input() placeholderInput: string = '';
  @Input() nameInput: string = '';

  public value: string;

  constructor(private controlValueAccessorService: ControlValueAccessorService) {}

  ngOnInit(): void {
    this.value = this.controlValueAccessorService.value || '';
  }

  setValue(event): void {
    this.controlValueAccessorService.setValue(event);
  }
}
