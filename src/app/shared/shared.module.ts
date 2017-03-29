import { NgModule } from '@angular/core';

import { HeaderModule } from './header';
import { FooterModule } from './footer';
import { LogoModule } from './logo';
import { NavbarModule } from './navbar';
import { AuthDropDownModule } from './auth-drop-down';
import { IsAuthorizedModule } from './is-authorized';
import { NoContentModule } from './no-content';
import { CrButtonModule } from './button';
import { CrButtonLinkModule } from './button-link';
import { CrModalModule } from './modal';
import { PlateBorderModule } from './plate-border';
import { TopRatedModule } from './top-rated';
import { DurationModule } from './duration';
import { OrderByModule } from './order-by';
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
      CrButtonModule,
      CrModalModule,
      PlateBorderModule,
      TopRatedModule,
      DurationModule,
      OrderByModule
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
      CrButtonLinkModule,
      CrModalModule,
      PlateBorderModule,
      TopRatedModule,
      DurationModule,
      OrderByModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule
    ]
})
export class SharedModule { }
