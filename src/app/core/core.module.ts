import { NgModule } from '@angular/core';

import { LoaderModule } from './loader';
import {
  AuthService,
  AuthTokenService,
  CoursesService,
  CoursesResourceService,
  LoaderService,
  HelperService,
  SearchService,
  SearchResourceService,
  UserService,
  UserResourceService,
  AuthResourceService,
  AuthorizedHttpService
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
    SearchService,
    SearchResourceService,
    UserService,
    UserResourceService,
    AuthResourceService,
    AuthorizedHttpService
  ]
})
export class CoreModule { }
