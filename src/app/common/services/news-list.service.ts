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
    let params = new HttpParams().set('news_id', newsId);
    return this.http.get<INewsDetail>(BASE_URL + 'get-news-detail', { params: params });
  }

  getRelatedNews(newsId): Observable<INewsItem[]> {
    let params = new HttpParams().set('news_id', newsId);
    return this.http.get<INewsItem[]>(BASE_URL + 'get-related-news', { params: params });
  }

}
