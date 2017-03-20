import { Component, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'cr-button',
	templateUrl: './button.html',
  styleUrls: [ './button.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class CrButtonComponent {
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() type: string;
  @Input() buttonSize: string = 'default';
  @Input() buttonClass: string;
  @Input() routerLink: string;

  getComponentClasses(): string {
    const classes: string[] = [
      'btn',
      `cr-button--size-${ this.buttonSize }`,
      this.buttonClass
    ];

    return classes.join(' ');
  }

  clickHandler(): void {
	  this.onClick.emit();
  }
}
