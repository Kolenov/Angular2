import { NgModule } from '@angular/core';
import { HeaderModule } from './header';
import { FooterModule } from './footer';
import { LogoModule } from './logo';
import { NavbarModule } from './navbar';
import { AuthDropDownModule } from './auth-drop-down';
import { NoContentModule } from './no-content';
import { CrButtonModule } from './button';

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
      CrButtonModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
