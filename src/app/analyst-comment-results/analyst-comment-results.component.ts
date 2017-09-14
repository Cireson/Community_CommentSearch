import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService } from './../shared/comment.service';
import { AnalystComment } from './../shared/comment.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-analyst-comment-results',
  templateUrl: './analyst-comment-results.component.html',
  styleUrls: ['./analyst-comment-results.component.css']
})
export class AnalystCommentResultsComponent {
  term: string;

  data: [any];
  columns = [
    'WorkItemId',
    'Comment',
    'IsPrivate',
    'EnteredBy',
    'EnteredDate'
  ];
  take = 10;
  skip = 0;
  page = 1;
  total = 0;

  constructor(protected service: CommentService, protected router: Router) {}

  private loadComments(): void {
    this.service.getAnalystComments(this.term, this.take, this.skip).subscribe(x => {
      this.data = x;
      this.total = x && x[0] && x[0].Total ? x[0].Total : 0;
    }, err => console.log(err));
  }

  onPageChanged(page: number) {
    this.skip = (this.take * page) - this.take;
    this.loadComments();
  }

  onPageSizeChanged(size: number) {
    console.log(size);
    this.take = size;
    this.loadComments();
  }

  onSearchChange(value: string) {
    console.log(value);
    this.term = value;
    this.loadComments();
  }
}
