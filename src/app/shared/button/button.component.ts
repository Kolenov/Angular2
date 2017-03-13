import { Component, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'cr-button',
	templateUrl: './button.html',
  styleUrls: [ './button.scss' ],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class CrButtonComponent {
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() type: string;
  @Input() buttonSize: string = 'default';
  @Input() buttonClass: string;

	constructor() {

	}

  getComponentClasses(): string {
    const classes: string[] = [
      `cr-button--size-${ this.buttonSize }`,
      this.buttonClass
    ];

    return classes.join(' ');
  }

  clickHandler(): void {
	  this.onClick.emit();
  }
}
