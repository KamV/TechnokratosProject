import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from "@angular/router";
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
import { SimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';

import { NewsListService } from '../../common/services/news-list.service';
import { INewsItem, INewsDetail } from '../../interfaces';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.styl']
})
export class NewsDetailComponent implements OnInit {

  isNewsDetail: boolean = true;
  newsDetail: INewsDetail = null;
  relatedNews: INewsItem[] = [];

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private simpleSmoothScrollService: SimpleSmoothScrollService,
    private newsListService: NewsListService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Detail');
    this.simpleSmoothScrollService.smoothScrollToTop({ duration: 500, easing: 'linear' });
    let newsId = this.route.snapshot.paramMap.get('id');
    this.getNewsDetail(newsId);
    this.getRelatedNews(newsId);
  }

  getNewsDetail(newsId) {
    this.newsDetail = this.newsListService.getNewsDetail(newsId);
  }

  getRelatedNews(newsId) {
    this.relatedNews = this.newsListService.getRelatedNews(newsId);
  }

}
