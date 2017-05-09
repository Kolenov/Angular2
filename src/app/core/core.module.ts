import { NgModule } from '@angular/core';

import { LoaderModule } from './loader';
import {
  AuthService,
  AuthTokenService,
  CoursesService,
  CoursesResourceService,
  LoaderService,
  HelperService,
  UserService,
  UserResourceService,
  AuthResourceService,
  AuthorizedHttpService,
  ControlValueAccessorService,
  CanActivateAuthGuard
} from './services';

@NgModule({
  imports: [
    LoaderModule
  ],
  exports: [
    LoaderModule
  ],
  providers: [
    AuthService,
    AuthTokenService,
    CoursesService,
    CoursesResourceService,
    LoaderService,
    HelperService,
    UserService,
    UserResourceService,
    AuthResourceService,
    AuthorizedHttpService,
    ControlValueAccessorService,
    CanActivateAuthGuard
  ]
})
export class CoreModule { }
