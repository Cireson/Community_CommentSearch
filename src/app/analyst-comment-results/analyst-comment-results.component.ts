import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from './../shared/comment.service';
import { AnalystComment } from './../shared/comment.model';
import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-analyst-comment-results',
  templateUrl: './analyst-comment-results.component.html',
  styleUrls: ['./analyst-comment-results.component.css']
})
export class AnalystCommentResultsComponent implements OnInit, OnDestroy {
  term: string;
  loading: boolean;
  activatedRoute: any;

  data: [any];
  columns = [
    'WorkItemId',
    'Comment',
    'IsPrivate',
    'EnteredBy',
    'EnteredDate'
  ];
  take = 5;
  skip = 0;
  page = 1;
  total = 0;

  constructor(protected service: CommentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute = this.route.params.subscribe(params => {
      this.term = params['term'];

      this.loadComments();
    });
  }

  ngOnDestroy() {
    this.activatedRoute.unsubscribe();
  }

  private loadComments(): void {
    // load comments based on search term, take, and skip
    // if term is empty, empty the grid
    if (!this.term || this.term === '') {
      this.data = [0];
      this.total = 0;
    } else {
      // set loading icon
      this.loading = true;
      this.service.getAnalystComments(this.term, this.take, this.skip).subscribe(x => {
        this.data = x;
        this.total = x && x[0] && x[0].Total ? x[0].Total : 0;

        // remove loading icon
        this.loading = false;
      }, err => console.log(err));
    }
  }

  onPageChanged(page: number) {
    this.skip = (this.take * page) - this.take;
    this.loadComments();
  }

  onPageSizeChanged(size: number) {
    this.take = size;
    this.loadComments();
  }

  onSearchChange(value: string) {
    this.term = value;
    this.loadComments();
  }
}
