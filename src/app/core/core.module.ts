import { NgModule } from '@angular/core';

import { LoaderModule } from './loader';
import { AuthService, CoursesService, LoaderService, HelperService, SearchService, UserService } from './services';

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
    LoaderService,
    HelperService,
    SearchService,
    UserService
  ]
})
export class CoreModule { }
