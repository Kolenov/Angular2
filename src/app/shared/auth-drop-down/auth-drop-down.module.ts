import { NgModule } from '@angular/core';
import { AuthDropDownComponent } from './auth-drop-down.component';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [AuthDropDownComponent],
	imports: [
    CommonModule,
    DropdownModule.forRoot(),
    RouterModule
  ],
	exports: [AuthDropDownComponent]
})
export class AuthDropDownModule {
}
