import { AppRoutingModule } from './shared/app.routing.module';
import { CommentService } from './shared/comment.service';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AnalystCommentResultsComponent } from './analyst-comment-results/analyst-comment-results.component';
import { UserCommentResultsComponent } from './user-comment-results/user-comment-results.component';
import { CommentSearchComponent } from './comment-search/comment-search.component';
import { CommentResultsGridComponent } from './comment-results-grid/comment-results-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalystCommentResultsComponent,
    UserCommentResultsComponent,
    CommentSearchComponent,
    CommentResultsGridComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
