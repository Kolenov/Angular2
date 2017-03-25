import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'cr-navbar',
	templateUrl: './navbar.html',
  styleUrls: [ './navbar.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
}
