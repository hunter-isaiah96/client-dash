import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Article, ArticleRoot } from '../models/article/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  mainURL =
    'https://newsapi.org/v2/everything?q=tech&from=2020-07-29&to=2020-07-29&sortBy=popularity&apiKey=2b9e2ae1c65c48658f5cfefbccff07b0';
  newsApi = `${this.mainURL}&pageSize=13`;

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http
      .get<ArticleRoot>(this.newsApi)
      .pipe(switchMap((data) => of(data.articles)));
  }
}
