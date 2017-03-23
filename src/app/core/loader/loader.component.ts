import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from '../../core/services';

@Component({
	selector: 'cr-loader',
	templateUrl: './loader.html',
  styleUrls: [ './loader.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class LoaderComponent {
  constructor(private loaderService: LoaderService) {
	}
}
