import { Component, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'cr-breadcrumb',
	templateUrl: './breadcrumb.html',
  styleUrls: [ './breadcrumb.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class CrBreadcrumbComponent {
  // @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  // @Input() type: string;
  // @Input() disabled: string;
  // @Input() buttonSize: string = 'default';
  // @Input() buttonClass: string;
  //
  // getComponentClasses(): string {
  //   const classes: string[] = [
  //     'btn',
  //     `cr-button--size-${ this.buttonSize }`,
  //     this.buttonClass
  //   ];
  //
  //   return classes.join(' ');
  // }
  //
  // clickHandler(): void {
	//   this.onClick.emit();
  // }
}
