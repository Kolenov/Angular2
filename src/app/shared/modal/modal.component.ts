import { Component, ViewEncapsulation, Input, ViewChild, OnChanges } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
	selector: 'cr-modal',
	templateUrl: './modal.html',
  styleUrls: [ './modal.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class CrModalComponent implements OnChanges {
  @ViewChild('confirmDeleteCourseModal') public confirmDeleteCourseModal: ModalDirective;

  @Input() title: string;
  @Input() show: boolean;
  @Input() hide: boolean;

  ngOnChanges(): void {
    if (this.show) {
      this.confirmDeleteCourseModal.show();
    }

    if (this.hide) {
      this.confirmDeleteCourseModal.hide();
    }
  }

  hideModal(): void {
    this.confirmDeleteCourseModal.hide();
  }
}
