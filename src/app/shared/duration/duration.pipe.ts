import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'crDuration',
  pure: false
})
export class DurationPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    return this.formatTime(value);
  }

  private formatTime(timestamp: string): string {
    const correction: number = 60;
    let duration: number = +timestamp;

    if (!(/^\d+$/).test(timestamp)) {
      duration = 0;
    }

    const HH: number = Math.floor(duration / correction);
    const mm: number = Math.floor((duration - (HH * correction)));

    return HH <= 0 ? `${ mm }min` : `${ HH }h ${ mm }min`;
  }
}
