import { Component, ViewEncapsulation, Input, ViewChild, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
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
  @Output() onHideModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['show'].currentValue) {
      this.modalWindow.show();
    }

    if (changes['hide'].currentValue) {
      this.modalWindow.hide();
    }
  }

  hideModal(): void {
    const isHide: boolean = true;

    this.onHideModal.emit(isHide);
  }
}
