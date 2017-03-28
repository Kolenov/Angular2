import { Directive, ElementRef, Input, OnInit } from '@angular/core';

const borderColor = {
  freshCourse: '#009d3d',
  upcomingCourse: '#6BC5D3',
  oldCourse: '#eeeeee'
};

@Directive({
  selector: '[cr-plate-border]'
})

export class PlateBorderDirective implements OnInit {
  @Input() createdDate: Date;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): any {
    const currentDate: Date = new Date();
    const freshPeriod: Date = new Date();
    freshPeriod.setDate(freshPeriod.getDate() - 2);

    if (this.createdDate > currentDate) {
      this.highlightBorder(borderColor.upcomingCourse);
    } else if (this.createdDate < currentDate && this.createdDate >= freshPeriod) {
      this.highlightBorder(borderColor.freshCourse);
    } else {
      this.highlightBorder(borderColor.oldCourse);
    }
  }

  private highlightBorder(color: string) {
    this.el.nativeElement.style.borderColor = color;
  }
}
