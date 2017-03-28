import { NgModule } from '@angular/core';
import { PlateBorderDirective } from './plate-border.directive';

@NgModule({
  declarations: [PlateBorderDirective],
  exports: [PlateBorderDirective]
})

export class PlateBorderModule {
}
