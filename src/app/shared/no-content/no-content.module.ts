import { NgModule } from '@angular/core';
import { NoContentComponent } from './no-content.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [NoContentComponent],
	imports: [RouterModule],
	exports: [NoContentComponent]
})
export class NoContentModule {
	constructor() {
	}
}
