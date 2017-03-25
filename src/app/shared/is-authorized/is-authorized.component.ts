import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../core/services';
import { UserInfo } from '../../models';
import { Observable } from 'rxjs';

@Component({
	selector: 'cr-is-authorized',
	templateUrl: './is-authorized.html',
  styleUrls: [ './is-authorized.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class IsAuthorizedComponent implements OnInit {
  public userInfo$: Observable<UserInfo>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userInfo$ = this.authService.getUserInfo();
  }
}
