import {
  Component, ViewEncapsulation, Output, EventEmitter, OnInit, Input
} from '@angular/core';
import { CourseItem } from '../../../models';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { validateOnlyNumbers } from '../../../shared/validators/only-numbers/only-numbers.validator';
import { validateDateFormat } from '../../../shared/validators/date-format/date-format.validator';
import {
  validateCheckedCheckbox
} from '../../../shared/validators/checked-checkbox.validator/checked-checkbox.validator';
import { Subscription } from 'rxjs';
import { CoursesService } from '../../../core/services';

@Component({
	selector: 'cr-course-form',
	templateUrl: './course-form.html',
  styleUrls: [ './course-form.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class CourseFormComponent implements OnInit {
  @Input() authors;
  @Output() onSubmit: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

  formGroup: FormGroup;

  private subscription: Subscription;

  constructor(private formBuilder: FormBuilder,
              private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
      date: ['', [validateDateFormat]],
      duration: ['', [validateOnlyNumbers]],
      authors: ['', [validateCheckedCheckbox]]
    });

    this.subscription = this.coursesService.getCoursesUsers()
      .subscribe((data) => {
        this.setControlValue('authors', data);
      });
  }

  setControlValue(controlName, value): void {
    this.formGroup.controls[controlName].setValue(value);
    this.authors = value;
  }

  formatToDateString(data: string): string {
    const date: Date = new Date(data);

    return date.toDateString();
  }

  submit(event: NgForm): void {
    event.value.date = this.formatToDateString(event.value.date);

    if (event.valid) {
      this.onSubmit.emit(event.value);
    }
  }
}
