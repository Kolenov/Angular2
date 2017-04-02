import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'cr-top-rated',
	templateUrl: './top-rated.html',
  styleUrls: [ './top-rated.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class TopRatedComponent {
  @Input() topRated: boolean = false;
  @Output() toggleRaiting: EventEmitter<void> = new EventEmitter<void>();

  onToggleRaiting(): void {
    this.toggleRaiting.emit();
  }
}
