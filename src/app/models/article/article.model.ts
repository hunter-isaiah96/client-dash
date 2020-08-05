export interface Source {
  id?: any;
  name: string;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export interface ArticleRoot {
  status: string;
  totalResults: number;
  articles: Article[];
}
