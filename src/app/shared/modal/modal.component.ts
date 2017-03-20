import { Component, ViewEncapsulation, Input, ViewChild, OnChanges } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
	selector: 'cr-modal',
	templateUrl: './modal.html',
  styleUrls: [ './modal.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class CrModalComponent implements OnChanges {
  @ViewChild('modalWindow') public modalWindow: ModalDirective;

  @Input() title: string;
  @Input() modal: string;
  @Input() show: boolean;
  @Input() hide: boolean;

  ngOnChanges(): void {
    if (this.show) {
      this.modalWindow.show();
    }

    if (this.hide) {
      this.modalWindow.hide();
    }
  }

  hideModal(): void {
    this.modalWindow.hide();
  }
}
