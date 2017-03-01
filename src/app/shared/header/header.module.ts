import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

import { LogoModule } from './../logo';
import { NavbarModule } from './../navbar';
import { AuthDropDownModule } from './../auth-drop-down';

@NgModule({
	declarations: [HeaderComponent],
	imports: [
	  RouterModule,
    LogoModule,
    NavbarModule,
    AuthDropDownModule
  ],
	exports: [HeaderComponent]
})

export class HeaderModule {
	constructor() {
	}
}
