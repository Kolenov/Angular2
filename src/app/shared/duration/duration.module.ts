import { NgModule } from '@angular/core';
import { DurationPipe } from './duration.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [DurationPipe],
  exports: [DurationPipe],
  providers: [DatePipe]
})

export class DurationModule {
}
