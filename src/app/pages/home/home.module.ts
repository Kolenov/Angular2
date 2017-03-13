// angular modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

// routes
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';

// custom components
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(homeRoutes),
    SharedModule
  ],
  providers: []
})
export class HomeModule {
  constructor() {}
}
