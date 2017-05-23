// angular modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

// routes
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { Clock } from './clock';

@NgModule({
  declarations: [
    HomeComponent,
    Clock
  ],
  imports: [
    RouterModule.forChild(homeRoutes),
    SharedModule
  ]
})
export class HomeModule {
}
