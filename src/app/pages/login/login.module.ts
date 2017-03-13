// angular modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { RouterModule } from '@angular/router';
import { loginRoutes } from './login.routes';

// custom components
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(loginRoutes),
    FormsModule,
    CommonModule
  ],
  providers: []
})
export class LoginModule {
  constructor() {}
}
