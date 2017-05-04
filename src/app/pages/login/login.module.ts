// angular modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { RouterModule } from '@angular/router';
import { loginRoutes } from './login.routes';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(loginRoutes),
    SharedModule
  ]
})
export class LoginModule {
}
