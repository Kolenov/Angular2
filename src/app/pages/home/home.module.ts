// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
    CommonModule
  ],
  providers: []
})
export class HomeModule {
  constructor() {}
}
