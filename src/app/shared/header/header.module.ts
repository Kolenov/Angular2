import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { LogoModule } from './../logo';
import { NavbarModule } from './../navbar';
import { AuthDropDownModule } from './../auth-drop-down';
import { IsAuthorizedModule } from './../is-authorized';

@NgModule({
	declarations: [
	  HeaderComponent
  ],
	imports: [
    CommonModule,
    LogoModule,
    NavbarModule,
    AuthDropDownModule,
    IsAuthorizedModule
  ],
	exports: [HeaderComponent]
})

export class HeaderModule {
}
