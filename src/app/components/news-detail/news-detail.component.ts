import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from "@angular/router";

import { NewsListService } from '../../common/services/news-list.service';
import { INewsItem, INewsDetail } from '../../interfaces';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.styl']
})
export class NewsDetailComponent implements OnInit {

  title: string = null;
  text: string = null;
  relatedNews: INewsItem[] = [];

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private newsListService: NewsListService
  ) {
    this.route.params.subscribe((param) => {
      this.getNewsDetail(param.id);
      this.getRelatedNews(param.id);
      this.scrollToTop();
    });
  }

  ngOnInit() {
    this.titleService.setTitle('Detail');
  }

  scrollToTop() {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 20);
      } else {
          window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  getNewsDetail(newsId) {
    this.newsListService.getNewsDetail(newsId).subscribe(data => {
      this.title = data.title;
      this.text = data.text;
    });
  }

  getRelatedNews(newsId) {
    this.newsListService.getRelatedNews(newsId).subscribe(data => this.relatedNews = data);
  }

}
