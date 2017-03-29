import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRatedComponent } from './top-rated.component';

@NgModule({
  declarations: [TopRatedComponent],
  exports: [TopRatedComponent],
  imports: [
    CommonModule
  ]
})

export class TopRatedModule {
}
