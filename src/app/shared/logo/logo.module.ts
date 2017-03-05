import { NgModule } from '@angular/core';
import { LogoComponent } from './logo.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [LogoComponent],
	imports: [RouterModule],
	exports: [LogoComponent]
})
export class LogoModule {
	constructor() {
	}
}

// import { NgModule } from '@angular/core';
// import { FooterComponent } from './footer.component';
//
// @NgModule({
//   declarations: [FooterComponent],
//   imports: [],
//   exports: [FooterComponent]
// })
//
// export class FooterModule {
//   constructor() {}
// }
