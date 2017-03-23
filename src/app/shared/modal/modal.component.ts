import {
  Component,
  ViewEncapsulation,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
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
  @Input() isShow: boolean;
  @Output() onHideModal: EventEmitter<void> = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isShow'].currentValue) {
      this.modalWindow.show();
    } else {
      this.modalWindow.hide();
    }
  }

  hideModal(): void {
    this.onHideModal.emit();
  }
}
