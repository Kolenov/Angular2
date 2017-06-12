// angular modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

// routes
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(homeRoutes),
    SharedModule
  ]
})
export class HomeModule {
}
