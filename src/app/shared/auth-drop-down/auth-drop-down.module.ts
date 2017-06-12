import { NgModule } from '@angular/core';
import { AuthDropDownComponent } from './auth-drop-down.component';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [AuthDropDownComponent],
	imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule
  ],
	exports: [AuthDropDownComponent]
})
export class AuthDropDownModule {
}
