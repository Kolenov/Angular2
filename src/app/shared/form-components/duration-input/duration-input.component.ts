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
export class DurationInputComponent implements OnInit {
  @Input() inputClass: string = '';
  @Input() wrapperClass: string = '';
  @Input() nameInput: string = '';

  public value: string;

  constructor(private controlValueAccessorService: ControlValueAccessorService) {}

  ngOnInit(): void {
    this.value = this.controlValueAccessorService.value || '';
  }

  updateValue(data: string): void {
    this.value = data;
  }

  setValue(item): void {
    this.updateValue(item.target.value);

    this.controlValueAccessorService.setValue(item);
  }
}
