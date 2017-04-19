import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../core/services';
import { Observable } from 'rxjs';

@Component({
	selector: 'cr-is-authorized',
	templateUrl: './is-authorized.html',
  styleUrls: [ './is-authorized.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class IsAuthorizedComponent implements OnInit {
  public isAuthorized$: Observable<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isAuthorized$ = this.authService.isAuthorized();
  }
}
