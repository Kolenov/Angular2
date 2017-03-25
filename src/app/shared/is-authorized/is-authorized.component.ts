import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AuthService } from '../../core/services';
import { UserInfo } from '../../models';
import { Observable } from 'rxjs';

@Component({
	selector: 'cr-is-authorized',
	templateUrl: './is-authorized.html',
  styleUrls: [ './is-authorized.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class IsAuthorizedComponent implements OnInit {
  public userInfo$: Observable<UserInfo>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userInfo$ = this.authService.getUserInfo();
  }
}
