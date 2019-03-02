import { Injectable } from '@angular/core';
import { INewsItem, INewsDetail } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsListService {

  private news: INewsItem[] = [
    { id:'1', src: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjJo8i-jePgAhVMPpoKHfSwCgcQjRx6BAgBEAU&url=https%3A%2F%2Fmirpozitiva.ru%2Farticles%2F1775-romanticheskie-kartinki.html&psig=AOvVaw2TOk3UeGXiP7pFYwKOoZiZ&ust=1551604001538799', description: 'First News'},
    { id:'2', src: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjJo8i-jePgAhVMPpoKHfSwCgcQjRx6BAgBEAU&url=https%3A%2F%2Fmirpozitiva.ru%2Farticles%2F1775-romanticheskie-kartinki.html&psig=AOvVaw2TOk3UeGXiP7pFYwKOoZiZ&ust=1551604001538799', description: 'Second News'},
    { id:'3', src: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjJo8i-jePgAhVMPpoKHfSwCgcQjRx6BAgBEAU&url=https%3A%2F%2Fmirpozitiva.ru%2Farticles%2F1775-romanticheskie-kartinki.html&psig=AOvVaw2TOk3UeGXiP7pFYwKOoZiZ&ust=1551604001538799', description: 'Third News'},
    { id:'4', src: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjJo8i-jePgAhVMPpoKHfSwCgcQjRx6BAgBEAU&url=https%3A%2F%2Fmirpozitiva.ru%2Farticles%2F1775-romanticheskie-kartinki.html&psig=AOvVaw2TOk3UeGXiP7pFYwKOoZiZ&ust=1551604001538799', description: 'Third News'}
  ];

  private newsDetail: INewsDetail = { title: 'News title', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam non labore facere ducimus laboriosam, magni esse? Provident accusamus et repellat, maxime reprehenderit tempora assumenda asperiores adipisci. Eaque corporis suscipit quam.' };

  constructor() { }

  getNews(): INewsItem[] {
    return this.news;
  }

  getNewsDetail(newsId): INewsDetail {
    return this.newsDetail;
  }

  getRelatedNews(newsId): INewsItem[] {
    return this.news;
  }

}
