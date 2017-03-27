import {
  Component,
  ViewEncapsulation,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
	selector: 'cr-modal',
	templateUrl: './modal.html',
  styleUrls: [ './modal.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class CrModalComponent implements OnChanges {
  @ViewChild('modalWindow') public modalWindow: ModalDirective;

  @Input() title: string;
  @Input() isShow: boolean;
  @Output() onHideModal: EventEmitter<void> = new EventEmitter<void>();

  constructor(private ref: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isShow'].currentValue) {
      this.modalWindow.show();
    } else {
      this.modalWindow.hide();
    }
  }

  hideModal(): void {
    this.onHideModal.emit();

    this.ref.markForCheck();
  }
}
