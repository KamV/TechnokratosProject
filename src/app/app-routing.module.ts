import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';

const routes: Routes = [
  { path: 'news-list', component: NewsListComponent },
  { path: 'news-detail/:id', component: NewsDetailComponent },
  { path: '**', redirectTo: '/news-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
