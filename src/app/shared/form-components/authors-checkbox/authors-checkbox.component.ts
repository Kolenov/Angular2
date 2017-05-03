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
	selector: 'cr-authors-checkbox',
	templateUrl: './authors-checkbox.html',
  styleUrls: [ './authors-checkbox.scss' ],
	encapsulation: ViewEncapsulation.None,
  providers: [ CUSTOM_RADIO_VALUE_ACCESSOR, ControlValueAccessorService ]
})
export class AuthorsCheckboxComponent implements OnInit {
  @Input() inputClass: string = '';
  @Input() wrapperClass: string = '';
  @Input() nameInput: string = '';

  public value;

  constructor(private controlValueAccessorService: ControlValueAccessorService) {}

  ngOnInit(): void {
    this.value = this.controlValueAccessorService.value || '';
  }

  setValue(checked, index): void {
    this.value[index].checked = (!checked);

    this.controlValueAccessorService.setValue(this.value);
  }

  onBlur() {
    this.controlValueAccessorService.onBlur();
  }
}
