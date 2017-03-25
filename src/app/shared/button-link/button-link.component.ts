import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'cr-button-link',
	templateUrl: './button-link.html',
  styleUrls: [ './button-link.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
