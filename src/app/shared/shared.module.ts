import { NgModule } from '@angular/core';
import { HeaderModule } from './header';
import { FooterModule } from './footer';
import { LogoModule } from './logo';
import { NavbarModule } from './navbar';
import { AuthDropDownModule } from './auth-drop-down';

@NgModule({
    imports: [
      HeaderModule,
      FooterModule,
      LogoModule,
      NavbarModule,
      AuthDropDownModule
    ],
    exports: [
      HeaderModule,
      FooterModule,
      LogoModule,
      NavbarModule,
      AuthDropDownModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
