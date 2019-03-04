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

  newsDetail: INewsDetail;
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
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  getNewsDetail(newsId) {
    this.newsListService.getNewsDetail(newsId).subscribe(data => {
      this.newsDetail = data;
    });
  }

  getRelatedNews(newsId) {
    this.newsListService.getRelatedNews(newsId).subscribe(data => this.relatedNews = data);
  }

}
