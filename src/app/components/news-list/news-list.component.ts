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

  title: string = 'Album example';
  text: string = "Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.";
  isNewsDetail: boolean = false;
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
