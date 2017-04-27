import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsCheckboxComponent } from './authors-checkbox.component';

@NgModule({
  declarations: [AuthorsCheckboxComponent],
  exports: [AuthorsCheckboxComponent],
  imports: [
    CommonModule
  ]
})

export class AuthorsCheckboxModule {
}
