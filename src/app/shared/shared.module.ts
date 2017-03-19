import { NgModule } from '@angular/core';

import { HeaderModule } from './header';
import { FooterModule } from './footer';
import { LogoModule } from './logo';
import { NavbarModule } from './navbar';
import { AuthDropDownModule } from './auth-drop-down';
import { NoContentModule } from './no-content';
import { CrButtonModule } from './button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      HeaderModule,
      FooterModule,
      LogoModule,
      NavbarModule,
      AuthDropDownModule,
      NoContentModule,
      CrButtonModule
    ],
    exports: [
      HeaderModule,
      FooterModule,
      LogoModule,
      NavbarModule,
      AuthDropDownModule,
      NoContentModule,
      CrButtonModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
