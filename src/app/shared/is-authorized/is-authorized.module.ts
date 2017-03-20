import { NgModule } from '@angular/core';
import { IsAuthorizedComponent } from './is-authorized.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
    IsAuthorizedComponent
  ],
	imports: [ CommonModule ],
	exports: [IsAuthorizedComponent]
})

export class IsAuthorizedModule {
}
