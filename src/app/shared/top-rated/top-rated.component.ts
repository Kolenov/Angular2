import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
	selector: 'cr-top-rated',
	templateUrl: './top-rated.html',
  styleUrls: [ './top-rated.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class TopRatedComponent {
  starIcon: boolean = false;

  changeIcon(): void {
    this.starIcon = !this.starIcon;
    console.log('change star');
  }
}
