import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';

import { IssuesComponent } from './issues/issues.component';

const routes: Routes = [
  { path: 'issues', component: IssuesComponent },
  { path: 'detail', component: IssueDetailComponent },
  { path: 'detail/:id', component: IssueDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
