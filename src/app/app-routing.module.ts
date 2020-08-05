import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Article1Component } from './pages/article1/article1.component';

const routes: Routes = [
  {
    path: '',
    data: { dark: true },
    component: HomeComponent,
  },
  { path: 'article/:id', component: Article1Component, data: { dark: false } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
