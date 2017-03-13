import { NgModule } from '@angular/core';
import { AuthDropDownComponent } from './auth-drop-down.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

@NgModule({
	declarations: [AuthDropDownComponent],
	imports: [
	  RouterModule,
    CommonModule,
    DropdownModule.forRoot()
  ],
	exports: [AuthDropDownComponent]
})
export class AuthDropDownModule {
	constructor() {
	}
}
