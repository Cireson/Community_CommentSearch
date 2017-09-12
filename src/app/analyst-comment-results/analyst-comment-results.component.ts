import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService } from './../comment.service';
import { AnalystComment } from './../shared/comment.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-analyst-comment-results',
  templateUrl: './analyst-comment-results.component.html',
  styleUrls: ['./analyst-comment-results.component.css']
})
export class AnalystCommentResultsComponent implements OnInit, OnChanges {
  @Input() term;

  // controls paging
  data: [AnalystComment];

  take = 10;
  takeControl = new FormControl();

  skip = 0;
  page = 1;
  total = 0;

  constructor(protected service: CommentService, protected router: Router) {
    this.takeControl.valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe(v => {
        this.take = v;
        this.loadComments();
      });
  }

  private loadComments(): void {
    this.service.getAnalystComments(this.term, this.take, this.skip).subscribe(x => {
      this.data = x;
      this.total = x[0].Total || 0;
    }, err => console.log(err));
  }

  ngOnInit() {
    if (this.term) {
      this.loadComments();
    }
  }

  ngOnChanges() {
    if (this.term) {
      this.loadComments();
    }
  }

  onClick(id: string) {
    window.location.href = '/Incident/Edit/' + id;
  }
}
