// angular modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    FormsModule,
    CommonModule
  ],
  providers: []
})
export class HomeModule {
  constructor() {}
}
