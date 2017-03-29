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

  private formatTime(duration: number): string {
    const durationTime = duration;
    const hours = Math.floor(durationTime / 3600);
    const minutes = Math.floor((durationTime - (hours * 3600)) / 60);
    let hh;
    let mm;

    if (hours < 10) {
      hh = `0${ hours }h`;
    } else {
      hh = `${ hours }h`;
    }

    if (minutes < 10) {
      mm = `0${ minutes }min`;
    } else {
      mm = `${ minutes }min`;
    }

    return `${ hh } ${ mm }`;
  }
}
