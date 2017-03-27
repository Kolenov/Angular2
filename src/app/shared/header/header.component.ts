import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services';
import { Observable } from 'rxjs';

@Component({
	selector: 'cr-header',
	templateUrl: './header.html',
  styleUrls: [ './header.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  public userInfo$: Observable<any>;

  constructor(private authService: AuthService ) {
  }

  ngOnInit(): void {
    this.userInfo$ = this.authService.getUserInfo();
  }
}
