import { Component, OnInit, Input } from '@angular/core';

import { INewsItem } from '../../interfaces';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.styl']
})
export class NewsItemComponent implements OnInit {

  @Input() newsItem: INewsItem;

  constructor() { }

  ngOnInit() {
  }

}
