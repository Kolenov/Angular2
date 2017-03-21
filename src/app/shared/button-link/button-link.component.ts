import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
	selector: 'cr-button-link',
	templateUrl: './button-link.html',
  styleUrls: [ './button-link.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class CrButtonLinkComponent {
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
}
