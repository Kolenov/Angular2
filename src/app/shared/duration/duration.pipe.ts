import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'crDuration',
  pure: false
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) {
      return '';
    }

    return this.formatTime(value);
  }

  private formatTime(timestamp: number): string {
    const correction: number = 60;

    const duration: number = timestamp;
    const HH: number = Math.floor(duration / correction);
    const mm: number = Math.floor((duration - (HH * correction)));

    if (HH <= 0) {
      return `${ mm }min`;
    }

    return `${ HH }h ${ mm }min`;
  }
}
