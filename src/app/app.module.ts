import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './user/footer/footer.component';
import { HeaderComponent } from './user/header/header.component';
import { ProductComponent } from './user/product/product.component';
import { ProductDetailComponent } from './user/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './user/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeComponent } from './user/home/home.component';
import { NewsComponent } from './user/news/news.component';
import { PostComponent } from './user/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    ProductDetailComponent,
    ContactComponent,
    NewsComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
