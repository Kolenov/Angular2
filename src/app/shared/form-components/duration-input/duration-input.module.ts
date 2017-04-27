import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationInputComponent } from './duration-input.component';
import { DurationModule } from '../../duration/duration.module';

@NgModule({
  declarations: [DurationInputComponent],
  exports: [DurationInputComponent],
  imports: [
    CommonModule,
    DurationModule
  ]
})

export class DurationInputModule {
}
