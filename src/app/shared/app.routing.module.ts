import { UserCommentResultsComponent } from './../user-comment-results/user-comment-results.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { AnalystCommentResultsComponent } from '../analyst-comment-results/analyst-comment-results.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'AnalystComments', pathMatch: 'full' },
  { path: 'AnalystComments', component: AnalystCommentResultsComponent },
  { path: 'UserComments', component: UserCommentResultsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
