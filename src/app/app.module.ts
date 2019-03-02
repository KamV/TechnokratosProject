import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { NavBarContactComponent } from './components/navbar/contact/contact.component';
import { NavBarAboutComponent } from './components/navbar/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarContactComponent,
    NavBarAboutComponent,
    FooterComponent,
    NewsListComponent,
    NewsItemComponent,
    NewsDetailComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SimpleSmoothScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
