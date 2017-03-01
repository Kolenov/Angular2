import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

import { LogoModule } from './../logo';

// import { LogoComponent } from './../logo';

@NgModule({
	declarations: [HeaderComponent],
	imports: [RouterModule, LogoModule],
	exports: [HeaderComponent]
})

export class HeaderModule {
	constructor() {
	}
}
