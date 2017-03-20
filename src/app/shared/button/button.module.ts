import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CrButtonComponent } from './button.component';

@NgModule({
	declarations: [
    CrButtonComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
	exports: [CrButtonComponent]
})

export class CrButtonModule {
}
