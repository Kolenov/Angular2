import { NgModule } from '@angular/core';
import { HeaderModule } from './header';

@NgModule({
    imports: [
      HeaderModule
    ],
    exports: [
      HeaderModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
