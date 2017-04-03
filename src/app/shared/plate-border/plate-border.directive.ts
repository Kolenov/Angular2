import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { BORDER_COLOR, PERIOD_OF_DATE } from './config';

@Directive({
  selector: '[cr-plate-border]'
})

export class PlateBorderDirective implements OnInit {
  @Input() createdDate: Date;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    const currentDate: Date = new Date();
    const freshPeriod: Date = new Date();

    freshPeriod.setDate(freshPeriod.getDate() - PERIOD_OF_DATE);

    if (this.createdDate > currentDate) {
      this.highlightBorder(BORDER_COLOR.upcomingCourse);
    } else if (this.createdDate < currentDate && this.createdDate >= freshPeriod) {
      this.highlightBorder(BORDER_COLOR.freshCourse);
    } else {
      this.highlightBorder(BORDER_COLOR.oldCourse);
    }
  }

  private highlightBorder(color: string): void {
    this.el.nativeElement.style.borderLeftColor = color;
  }
}
