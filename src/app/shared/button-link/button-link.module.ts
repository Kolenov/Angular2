import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CrButtonLinkComponent } from './button-link.component';

@NgModule({
	declarations: [
    CrButtonLinkComponent
  ],
  imports: [
    RouterModule
  ],
	exports: [CrButtonLinkComponent]
})

export class CrButtonLinkModule {
}
