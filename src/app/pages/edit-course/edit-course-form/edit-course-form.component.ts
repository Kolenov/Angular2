import {
  Component, ViewEncapsulation, Output, EventEmitter, Input, OnInit, SimpleChanges, OnChanges
} from '@angular/core';
import { CourseItem } from '../../../models';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { validateOnlyNumbers } from '../../../shared/validators/only-numbers/only-numbers.validator';
import { validateDateFormat } from '../../../shared/validators/date-format/date-format.validator';
import { validateCheckedCheckbox } from '../../../shared/validators/checked-checkbox.validator/checked-checkbox.validator';

@Component({
	selector: 'cr-edit-course-form',
	templateUrl: './edit-course-form.html',
  styleUrls: [ './edit-course-form.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class EditCourseFormComponent implements OnInit, OnChanges {
  @Input() public courseInfo: CourseItem;
  @Output() onSubmit: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
      date: ['', [validateDateFormat]],
      duration: ['', [validateOnlyNumbers]],
      authors: ['', [validateCheckedCheckbox]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['courseInfo'] && changes['courseInfo'].currentValue) {
      _.forOwn(this.formGroup.controls, (value, key) => {
        this.setControlValue(key, changes['courseInfo'].currentValue[key]);
      });
    }
  }

  setControlValue(controlName, value): void {
    this.formGroup.controls[controlName].setValue(value);
  }

  formatToDateString(data: string): string {
    const date: Date = new Date(data);

    return date.toDateString();
  }

  submit(event: NgForm): void {
    event.value.date = this.formatToDateString(event.value.date);

    if (event.valid) {
      this.onSubmit.emit(Object.assign(this.courseInfo, event.value));
    }
  }
}
