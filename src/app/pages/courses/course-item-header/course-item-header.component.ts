import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cr-course-item-header',
  templateUrl: 'course-item-header.html',
  styleUrls: [ './course-item-header.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class CourseItemHeaderComponent {
  @Input() public courseName: string;
  @Input() public courseDuration: number;
  @Input() public topRated: boolean;
  @Input() public courseDate: Date;

  // formatTime(duration) {
  //   const durationTime = parseInt(duration, 10);
  //   const hours = Math.floor(durationTime / 3600);
  //   const minutes = Math.floor((durationTime - (hours * 3600)) / 60);
  //   const seconds = durationTime - (hours * 3600) - (minutes * 60);
  //   let hh;
  //   let mm;
  //   let ss;
  //
  //   if (hours < 10) {
  //     hh = `0${ hours }h`;
  //   } else {
  //     hh = `${ hours }h`;
  //   }
  //
  //   if (minutes < 10) {
  //     mm = `0${ minutes }min`;
  //   } else {
  //     mm = `${ minutes }min`;
  //   }
  //
  //   if (seconds < 10) {
  //     ss = `0${ seconds }sec`;
  //   } else {
  //     ss = `${ seconds }sec`;
  //   }
  //
  //   return `${ hh } : ${ mm } : ${ ss }`;
  // }
}
