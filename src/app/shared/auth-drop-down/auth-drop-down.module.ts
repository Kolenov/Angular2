import { NgModule } from '@angular/core';
import { AuthDropDownComponent } from './auth-drop-down.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [AuthDropDownComponent],
	imports: [
	  RouterModule,
    ReactiveFormsModule,
    CommonModule
  ],
	exports: [AuthDropDownComponent]
})
export class AuthDropDownModule {
	constructor() {
	}
}
