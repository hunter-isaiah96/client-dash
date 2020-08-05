import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article/article.model';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-metro-grid',
  templateUrl: './metro-grid.component.html',
  styleUrls: ['./metro-grid.component.scss'],
})
export class MetroGridComponent implements OnInit {
  @Input() articles: Observable<Article[]>;
  faBookmark = faBookmark;
  constructor() {}

  ngOnInit(): void {}
}
