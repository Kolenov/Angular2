import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'cr-button',
	templateUrl: './cr-button.html',
  styleUrls: [ './cr-button.scss' ],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class CrButtonComponent {
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

	constructor() {

	}

  clickHandler() {
	  this.onClick.emit();
  }
}
