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
  skip = 0;

  constructor(protected service: CommentService, protected router: Router) { }

  private loadComments(term: string): void {
    this.service.getAnalystComments(term, this.take, this.skip).subscribe(x => {
      console.log(x);
      this.data = x;
    }, err => console.log(err));
  }

  ngOnInit() {
    if (this.term) {
      this.loadComments(this.term);
    }
  }

  ngOnChanges() {
    if (this.term) {
      this.loadComments(this.term);
    }
  }

  onClick(id: string) {
    window.location.href = '/Incident/Edit/' + id;
  }
}
