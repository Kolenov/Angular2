import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CrPaginationComponent } from './pagination.component';
import { PaginationModule } from 'ng2-bootstrap/pagination';

@NgModule({
	declarations: [
    CrPaginationComponent
  ],
  imports: [
    FormsModule,
    PaginationModule.forRoot()
  ],
	exports: [CrPaginationComponent]
})

export class CrPaginationModule {
}
