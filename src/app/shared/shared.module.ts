import { NgModule } from '@angular/core';

import { HeaderModule } from './header';
import { FooterModule } from './footer';
import { LogoModule } from './logo';
import { NavbarModule } from './navbar';
import { AuthDropDownModule } from './auth-drop-down';
import { IsAuthorizedModule } from './is-authorized';
import { NoContentModule } from './no-content';
import { CrButtonModule } from './button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      HeaderModule,
      FooterModule,
      LogoModule,
      NavbarModule,
      AuthDropDownModule,
      IsAuthorizedModule,
      NoContentModule,
      CrButtonModule
    ],
    exports: [
      HeaderModule,
      FooterModule,
      LogoModule,
      NavbarModule,
      AuthDropDownModule,
      IsAuthorizedModule,
      NoContentModule,
      CrButtonModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
