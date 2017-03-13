import { Component, ViewEncapsulation, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
	selector: 'cr-button',
	templateUrl: './button.html',
  styleUrls: [ './button.scss' ],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class CrButtonComponent implements OnInit {
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() type: string;
  @Input() buttonSize: string;
  @Input() buttonClass: string;

	constructor() {

	}

  ngOnInit() {
    this.buttonSize = this.buttonSize || 'default';
  }

  getComponentClasses(): string {
    const classes: string[] = [
      `cr-button--size-${ this.buttonSize }`
    ];

    if (this.buttonClass) {
      classes.push(this.buttonClass);
    }

    return classes.join(' ');
  }

  clickHandler(): void {
	  this.onClick.emit();
  }
}
