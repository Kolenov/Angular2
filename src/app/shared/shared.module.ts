import { NgModule } from '@angular/core';
import { HeaderModule } from './header';
import { FooterModule } from './footer';
import { LogoModule } from './logo';
import { NavbarModule } from './navbar';
import { AuthDropDownModule } from './auth-drop-down';
import { NoContentModule } from './no-content';

@NgModule({
    imports: [
      HeaderModule,
      FooterModule,
      LogoModule,
      NavbarModule,
      AuthDropDownModule,
      NoContentModule
    ],
    exports: [
      HeaderModule,
      FooterModule,
      LogoModule,
      NavbarModule,
      AuthDropDownModule,
      NoContentModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
