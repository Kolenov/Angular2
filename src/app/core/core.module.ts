import { NgModule } from '@angular/core';

import { LoaderModule } from './loader';
import { AuthService, CoursesService, LoaderService, HelperService } from './services';

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
    HelperService
  ]
})
export class CoreModule { }
