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
import { CrPaginationModule } from './pagination';
import { PlateBorderModule } from './plate-border';
import { TopRatedModule } from './top-rated';
import { DurationModule } from './duration';
import { OrderByModule } from './order-by';
import { FilterByModule } from './filter-by';
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
      CrPaginationModule,
      PlateBorderModule,
      TopRatedModule,
      DurationModule,
      OrderByModule,
      FilterByModule
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
      CrPaginationModule,
      PlateBorderModule,
      TopRatedModule,
      DurationModule,
      OrderByModule,
      FilterByModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule
    ]
})
export class SharedModule { }
