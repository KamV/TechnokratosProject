import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { INewsItem, INewsDetail } from '../../interfaces';
import { BASE_URL } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class NewsListService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<INewsItem[]> {
    return this.http.get<INewsItem[]>(BASE_URL + 'get-news');
  }

  getNewsDetail(newsId): Observable<INewsDetail> {
    return this.http.get<INewsDetail>(BASE_URL + 'get-news-detail', { params: { news_id: newsId.toString() }});
  }

  getRelatedNews(newsId): Observable<INewsItem[]> {
    return this.http.get<INewsItem[]>(BASE_URL + 'get-related-news', { params: { news_id: newsId.toString() }});
  }

}
