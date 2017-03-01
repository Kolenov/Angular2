import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

import { LogoModule } from './../logo';
import { NavbarModule } from './../navbar';

@NgModule({
	declarations: [HeaderComponent],
	imports: [
	  RouterModule,
    LogoModule,
    NavbarModule
  ],
	exports: [HeaderComponent]
})

export class HeaderModule {
	constructor() {
	}
}
