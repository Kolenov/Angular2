import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '../../models';
import { UserService } from '../../core/services';

@Component({
	selector: 'cr-is-authorized',
	templateUrl: './is-authorized.html',
  styleUrls: [ './is-authorized.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class IsAuthorizedComponent implements OnInit {
  public isAuthorized$: Observable<boolean>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.isAuthorized$ = this.userService.user$.map((user: UserInfo) => !!user);
  }
}
