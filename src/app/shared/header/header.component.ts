import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services';
import { Observable } from 'rxjs';
import { UserInfo } from '../../models';

@Component({
	selector: 'cr-header',
	templateUrl: './header.html',
  styleUrls: [ './header.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  public userInfo$: Observable<UserInfo>;

  constructor(private authService: AuthService ) {
  }

  ngOnInit(): void {
    this.userInfo$ = this.authService.getUserInfo();
  }
}
