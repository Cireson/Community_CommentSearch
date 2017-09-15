import { UserCommentResultsComponent } from './../user-comment-results/user-comment-results.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { AnalystCommentResultsComponent } from '../analyst-comment-results/analyst-comment-results.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'AnalystComments', pathMatch: 'full' },
  {
    path: 'AnalystComments',
    children: [
      {
        path: '',
        component: AnalystCommentResultsComponent
      },
      {
        path: ':term',
        component: AnalystCommentResultsComponent
      }
    ]
  },
  {
    path: 'UserComments',
    children: [
      {
        path: '',
        component: UserCommentResultsComponent
      },
      {
        path: ':term',
        component: UserCommentResultsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
