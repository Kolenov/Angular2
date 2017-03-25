import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'cr-header',
	templateUrl: './header.html',
  styleUrls: [ './header.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
}
