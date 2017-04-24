import {
  Component, EventEmitter,
  Input, OnInit, Output,
  ViewEncapsulation
} from '@angular/core';
import { Pagination } from '../../models';
import { PageChangedEvent } from 'ng2-bootstrap/pagination/pagination.component';

@Component({
	selector: 'cr-pagination',
	templateUrl: './pagination.html',
  styleUrls: [ './pagination.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class CrPaginationComponent {
  @Input() maxSize: number;
  @Input() totalItems: number;
  @Input() itemsPerPage: number;
  @Input() currentPage: number;
  @Output() onPageChange: EventEmitter<Pagination> = new EventEmitter<Pagination>();

  pageChanged(event: PageChangedEvent): void {
    this.onPageChange.emit({
      start: event.page,
      count: this.itemsPerPage
    });
  }
}
