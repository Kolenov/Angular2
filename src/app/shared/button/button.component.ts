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
  @Input() buttonClass: string;

	constructor() {

	}

  getComponentClasses() {
	  return `btn ${ this.buttonClass }`;
  }

  clickHandler() {
	  this.onClick.emit();
  }
}
