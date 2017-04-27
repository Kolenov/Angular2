import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateInputComponent } from './date-input.component';

@NgModule({
  declarations: [DateInputComponent],
  exports: [DateInputComponent],
  imports: [
    CommonModule
  ]
})

export class DateInputModule {
}
