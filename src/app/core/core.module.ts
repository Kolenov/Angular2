import { NgModule } from '@angular/core';

import { LoaderModule } from './loader';
import { AuthService, CoursesService, LoaderService } from './services';

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
    LoaderService
  ]
})
export class CoreModule { }
