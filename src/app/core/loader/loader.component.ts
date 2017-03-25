import {
  Component,
  ViewEncapsulation, OnInit, ChangeDetectionStrategy
} from '@angular/core';
import { LoaderService } from '../../core/services';
import { Observable } from 'rxjs';

@Component({
	selector: 'cr-loader',
	templateUrl: './loader.html',
  styleUrls: [ './loader.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class LoaderComponent implements OnInit {
  public isShowLoader$: Observable<boolean>;

  constructor(private loaderService: LoaderService) {
	}

	ngOnInit(): void {
    this.isShowLoader$ = this.loaderService.getLoader();
  }
}
