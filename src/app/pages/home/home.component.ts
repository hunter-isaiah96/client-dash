import { Component, OnInit } from '@angular/core';
import { faStar, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ArticlesService } from 'src/app/services/articles.service';
import { Observable, of } from 'rxjs';
import { Article, ArticleRoot } from 'src/app/models/article/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles: Observable<Article[]>;
  faStar = faStar;
  faChevronDown = faChevronDown;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.articles = this.articlesService.getArticles();
  }
}
