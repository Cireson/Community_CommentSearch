import { AnalystCommentSearchComponent } from './analyst-comment-search/analyst-comment-search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'AnalystCommentSearch', pathMatch: 'full' },
  { path: 'AnalystCommentSearch', component: AnalystCommentSearchComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
   // RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
