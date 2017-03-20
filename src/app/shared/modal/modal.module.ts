import { NgModule } from '@angular/core';
import { CrModalComponent } from './modal.component';
import { ModalModule } from 'ng2-bootstrap/modal';

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
