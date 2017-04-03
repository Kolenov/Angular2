import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { CourseRaiting } from '../../../models';

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
  @Output() toggleRaiting: EventEmitter<boolean> = new EventEmitter<boolean>();

  onToggleRaiting(): void {
    this.toggleRaiting.emit(this.topRated);
  }
}
