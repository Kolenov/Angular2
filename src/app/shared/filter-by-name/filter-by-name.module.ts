import { NgModule } from '@angular/core';
import { FilterByNamePipe } from './filter-by-name.pipe';

@NgModule({
  declarations: [FilterByNamePipe],
  exports: [FilterByNamePipe]
})

export class FilterByNameModule {
}
