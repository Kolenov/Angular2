import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '../../models';
import { UserService } from '../../core/services';

@Component({
	selector: 'cr-header',
	templateUrl: './header.html',
  styleUrls: [ './header.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  public userInfo$: Observable<UserInfo>;

  constructor(private userService: UserService ) {
  }

  ngOnInit(): void {
    this.userInfo$ = this.userService.getUserInfo();
  }
}
