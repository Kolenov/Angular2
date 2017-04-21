import {
  Component, EventEmitter,
  Input, Output,
  ViewEncapsulation
} from '@angular/core';
import { Pagination } from '../../models';

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
  @Input() numPages: number;
  @Output() onPageChange: EventEmitter<Pagination> = new EventEmitter<Pagination>();

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.onPageChange.emit({
      start: event.page,
      count: this.itemsPerPage
    });
  }
}
