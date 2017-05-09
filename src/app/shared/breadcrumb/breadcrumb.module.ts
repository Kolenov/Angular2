import { NgModule } from '@angular/core';
import { CrBreadcrumbComponent } from './breadcrumb.component';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';

@NgModule({
	declarations: [
    CrBreadcrumbComponent
  ],
  imports: [
    Ng2BreadcrumbModule.forRoot(),
  ],
	exports: [CrBreadcrumbComponent]
})

export class CrBreadcrumbModule {
}
