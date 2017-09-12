import { AppRoutingModule } from './app.routing.module';
import { CommentService } from './comment.service';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AnalystCommentSearchComponent } from './analyst-comment-search/analyst-comment-search.component';
import { AnalystCommentResultsComponent } from './analyst-comment-results/analyst-comment-results.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalystCommentSearchComponent,
    AnalystCommentResultsComponent
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
