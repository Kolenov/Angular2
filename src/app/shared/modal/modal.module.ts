import { NgModule } from '@angular/core';
import { CrModalComponent } from './modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
	declarations: [
    CrModalComponent
  ],
  imports: [
    ModalModule.forRoot()
  ],
	exports: [CrModalComponent]
})

export class CrModalModule {
}
