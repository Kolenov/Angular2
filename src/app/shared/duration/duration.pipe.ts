import {
  Pipe,
  PipeTransform
} from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'crDuration',
  pure: false
})
export class DurationPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: number): string {
    if (!value) {
      return '';
    }

    return this.formatTime(value);
  }

  private formatTime(timestamp: number): string {
    const HH: string = this.datePipe.transform(timestamp, 'HH');
    const mm: string = this.datePipe.transform(timestamp, 'mm');

    if (HH === '00') {
      return `${ mm }min`;
    }

    return `${ HH }h ${ mm }min`;
  }
}
