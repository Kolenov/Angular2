import { NgModule } from '@angular/core';
import { HeaderModule } from './header';
import { FooterModule } from './footer';

@NgModule({
    imports: [
      HeaderModule,
      FooterModule
    ],
    exports: [
      HeaderModule,
      FooterModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
