import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-comment-results-grid',
  templateUrl: './comment-results-grid.component.html',
  styleUrls: ['./comment-results-grid.component.css']
})
export class CommentResultsGridComponent implements OnInit, OnChanges {
  @Input() data: [any];
  @Input() columns: [string];
  @Input() total: number;
  @Input() page: number;
  @Input() pageSize: number;
  @Input() maxSize: number;

  @Output() pageChanged = new EventEmitter();
  @Output() pageSizeChanged = new EventEmitter();

  // page location numbers
  gridStartItemNumber: number;
  gridEndItemNumber: number;

  pageSizeControl = new FormControl();

  constructor() {
    this.pageSizeControl.valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe(v => {
        this.pageSizeChanged.emit(v);
      });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.gridStartItemNumber = (this.page * this.pageSize) - this.pageSize;
    this.gridEndItemNumber = (this.gridStartItemNumber + this.pageSize) > this.total
                              ? this.total
                              : (this.gridStartItemNumber + this.pageSize);
  }

  onClick(id: string) {
    window.location.href = '/Incident/Edit/' + id;
  }

  onPageChange(page: number) {
    this.pageChanged.emit(page);
  }
}
