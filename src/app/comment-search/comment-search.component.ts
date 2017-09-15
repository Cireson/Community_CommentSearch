import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-comment-search',
  templateUrl: './comment-search.component.html',
  styleUrls: ['./comment-search.component.css']
})
export class CommentSearchComponent {
  @Input() loading = false;
  @Output() searchChange = new EventEmitter();
  searchControl = new FormControl();

  constructor() {
    this.searchControl.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(v => this.searchChange.emit(v));
   }
}
