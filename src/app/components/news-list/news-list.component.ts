import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { NewsListService } from '../../common/services/news-list.service';
import { INewsItem } from '../../interfaces';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.styl']
})
export class NewsListComponent implements OnInit {

  news: INewsItem[] = [];

  constructor(
    private titleService: Title,
    private newsListService: NewsListService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('News');
    this.getNews();
  }

  getNews() {
     this.newsListService.getNews().subscribe(data => this.news = data);
  }

}
