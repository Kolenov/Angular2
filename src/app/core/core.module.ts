import { NgModule } from '@angular/core';

import { LoaderModule } from './loader';
import {
  AuthService,
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
