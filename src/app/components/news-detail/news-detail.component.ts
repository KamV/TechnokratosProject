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
  title: string = null;
  text: string = null;
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
    this.newsListService.getNewsDetail(newsId).subscribe(data => {
      this.title = data.title;
      this.text = data.text;
    });
  }

  getRelatedNews(newsId) {
    this.newsListService.getRelatedNews(newsId).subscribe(data => this.relatedNews = data);
  }

}
