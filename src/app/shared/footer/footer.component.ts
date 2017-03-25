import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'cr-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class FooterComponent {
}
