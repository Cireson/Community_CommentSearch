import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-analyst-comment-search',
  templateUrl: './analyst-comment-search.component.html',
  styleUrls: ['./analyst-comment-search.component.css']
})
export class AnalystCommentSearchComponent {
  searchTerm: string;
  searchControl = new FormControl();

  constructor() {
    this.searchControl.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(v => this.searchTerm = v);
   }
}
